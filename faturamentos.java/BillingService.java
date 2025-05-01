package com.example.billing.service;

import com.example.billing.entity.Cliente;
import com.example.billing.entity.Fatura;
import com.example.billing.entity.Interacao;
import com.example.billing.repository.ClienteRepository;
import com.example.billing.repository.FaturaRepository;
import com.example.billing.repository.InteracaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.LocalDate;
import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BillingService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private FaturaRepository faturaRepository;

    @Autowired
    private InteracaoRepository interacaoRepository;

    @Value("${twilio.account.sid}")
    private String twilioAccountSid;

    @Value("${twilio.auth.token}")
    private String twilioAuthToken;

    @Value("${twilio.whatsapp.number}")
    private String twilioWhatsappNumber;

    @Value("${mercado.pago.access.token}")
    private String mercadoPagoAccessToken;

    @Value("${empresa.nome}")
    private String empresaNome;

    @Value("${cnpj}")
    private String cnpj;

    @Value("${chave.pix}")
    private String chavePix;

    // Inicializar dados de teste
    public void inicializarDados() {
        Cliente cliente1 = new Cliente();
        cliente1.setNome("Ana Silva");
        cliente1.setTelefone("+5511999999999");
        cliente1.setCpf("12345678901");
        cliente1.setOptIn(true);
        clienteRepository.save(cliente1);

        Cliente cliente2 = new Cliente();
        cliente2.setNome("João Souza");
        cliente2.setTelefone("+5511988888888");
        cliente2.setCpf("98765432100");
        cliente2.setOptIn(true);
        clienteRepository.save(cliente2);

        Fatura fatura1 = new Fatura();
        fatura1.setCliente(cliente1);
        fatura1.setValor(150.0);
        fatura1.setVencimento("2025-05-05");
        fatura1.setStatus("pendente");
        faturaRepository.save(fatura1);

        Fatura fatura2 = new Fatura();
        fatura2.setCliente(cliente2);
        fatura2.setValor(200.0);
        fatura2.setVencimento("2025-05-05");
        fatura2.setStatus("pendente");
        faturaRepository.save(fatura2);
    }

    // Processar cobranças no dia X (ex.: dia 5) às 9h
    @Scheduled(cron = "0 0 9 5 * ?")
    public void processarCobrancas() {
        String hoje = LocalDate.now().toString();
        List<Fatura> faturas = faturaRepository.findFaturasPendentes();

        for (Fatura fatura : faturas) {
            if (fatura.getVencimento().startsWith(hoje.substring(0, 7))) {
                String qrCode = gerarQrCodePix(fatura.getValor(), fatura.getId());
                String mensagem = String.format(
                    "Olá, %s! A %s informa que sua fatura de R$%.2f vence em %s. Pague via Pix: %s. Dúvidas? Responda aqui!",
                    fatura.getCliente().getNome(), empresaNome, fatura.getValor(), fatura.getVencimento(), qrCode
                );

                if (enviarMensagemWhatsapp(fatura.getCliente().getTelefone(), mensagem)) {
                    Interacao interacao = new Interacao();
                    interacao.setFatura(fatura);
                    interacao.setMensagem(mensagem);
                    interacao.setDataEnvio(hoje);
                    interacaoRepository.save(interacao);
                    System.out.println("Cobrança enviada para " + fatura.getCliente().getNome() + " (" + fatura.getCliente().getTelefone() + ")");
                }
            }
        }
    }

    // Gerar QR Code Pix (Mercado Pago)
    private String gerarQrCodePix(double valor, Long faturaId) {
        HttpClient client = HttpClient.newHttpClient();
        String url = "https://api.mercadopago.com/v1/payments";
        Map<String, Object> payload = new HashMap<>();
        payload.put("transaction_amount", valor);
        payload.put("description", "Fatura #" + faturaId + " - " + empresaNome);
        payload.put("payment_method_id", "pix");
        payload.put("payer", Map.of("email", "cliente@exemplo.com"));
        payload.put("notification_url", "SUA_URL_WEBHOOK");
        payload.put("external_reference", "fatura_" + faturaId);

        try {
            String jsonPayload = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(payload);
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Bearer " + mercadoPagoAccessToken)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
                .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            if (response.statusCode() == 201) {
                com.fasterxml.jackson.databind.JsonNode jsonNode = new com.fasterxml.jackson.databind.ObjectMapper().readTree(response.body());
                String qrCode = jsonNode.path("point_of_interaction").path("transaction_data").path("qr_code").asText();
                return qrCode.isEmpty() ? "Chave Pix: " + chavePix : qrCode;
            }
        } catch (Exception e) {
            System.err.println("Erro ao gerar QR Code Pix: " + e.getMessage());
        }
        return "Chave Pix: " + chavePix;
    }

    // Enviar mensagem via WhatsApp (Twilio)
    private boolean enviarMensagemWhatsapp(String telefone, String mensagem) {
        HttpClient client = HttpClient.newHttpClient();
        String url = "https://api.twilio.com/2010-04-01/Accounts/" + twilioAccountSid + "/Messages.json";
        String auth = Base64.getEncoder().encodeToString((twilioAccountSid + ":" + twilioAuthToken).getBytes());

        Map<String, String> payload = new HashMap<>();
        payload.put("From", twilioWhatsappNumber);
        payload.put("To", "whatsapp:" + telefone);
        payload.put("Body", mensagem);

        try {
            String formPayload = payload.entrySet().stream()
                .map(e -> e.getKey() + "=" + java.net.URLEncoder.encode(e.getValue(), "UTF-8"))
                .collect(java.util.stream.Collectors.joining("&"));

            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .header("Authorization", "Basic " + auth)
                .header("Content-Type", "application/x-www-form-urlencoded")
                .POST(HttpRequest.BodyPublishers.ofString(formPayload))
                .build();

            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            return response.statusCode() == 201;
        } catch (Exception e) {
            System.err.println("Erro ao enviar mensagem: " + e.getMessage());
            return false;
        }
    }

    // Confirmar pagamento (via webhook)
    public void confirmarPagamento(Long faturaId) {
        Fatura fatura = faturaRepository.findById(faturaId).orElse(null);
        if (fatura != null) {
            fatura.setStatus("pago");
            faturaRepository.save(fatura);

            String mensagem = String.format(
                "Olá, %s! A %s confirma o pagamento da fatura #%d. Obrigado por sua confiança!",
                fatura.getCliente().getNome(), empresaNome, faturaId
            );
            enviarMensagemWhatsapp(fatura.getCliente().getTelefone(), mensagem);
        }
    }
}