private String gerarQrCodePixBb(double valor, Long faturaId) throws Exception
 {
    HttpClient client = HttpClient.newHttpClient();
    String url = "https://api.bb.com.br/pix/v1/payments";
    Map<String, Object> payload = new HashMap<>();
    payload.put("valor", valor);
    payload.put("chave", chavePix);
    payload.put("identificador", "fatura_" + faturaId);

    String jsonPayload = new com.fasterxml.jackson.databind.ObjectMapper().writeValueAsString(payload);
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create(url))
        .header("Authorization", "Bearer SEU_BB_ACCESS_TOKEN")
        .header("Content-Type", "application/json")
        .POST(HttpRequest.BodyPublishers.ofString(jsonPayload))
        .build();

    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
    com.fasterxml.jackson.databind.JsonNode jsonNode = new com.fasterxml.jackson.databind.ObjectMapper().readTree(response.body());
    return jsonNode.path("qr_code").asText();
}