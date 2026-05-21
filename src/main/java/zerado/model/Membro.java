package zerado.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Membro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Campos obrigatórios que vêm na planilha inicial
    @Column(nullable = false)
    private String nomeCompleto;

    private String cpf;
    private String cim;

    // Valores padrão para campos booleanos obrigatórios (evita o erro "cannot be null")
    private Boolean aposentado = false;
    private Boolean alterarSenhaProximoLogin = false;
    private Boolean contaDesativada = false;
    private Boolean recebeMensagemEmail = true;

    // Todos os outros campos abaixo aceitam ficar vazios (null) para preenchimento posterior
    private String celularPrincipal;
    private String emailPrincipal;
    private String profissao;
    private String estadoCivil;
    private String funcao;
    private String situacaoMacom;

    private LocalDate dataNascimento;
    private LocalDate dataIniciacao;
    private LocalDate dataElevacao;
    private LocalDate dataExaltacao;

    // Endereço
    private String enderecoResidencial;
    private String bairroResidencial;
    private String cidadeResidencial;
    private String ufResidencial;
    private String cepResidencial;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCim() {
        return cim;
    }

    public void setCim(String cim) {
        this.cim = cim;
    }

    public Boolean getAposentado() {
        return aposentado;
    }

    public void setAposentado(Boolean aposentado) {
        this.aposentado = aposentado;
    }

    public Boolean getAlterarSenhaProximoLogin() {
        return alterarSenhaProximoLogin;
    }

    public void setAlterarSenhaProximoLogin(Boolean alterarSenhaProximoLogin) {
        this.alterarSenhaProximoLogin = alterarSenhaProximoLogin;
    }

    public Boolean getContaDesativada() {
        return contaDesativada;
    }

    public void setContaDesativada(Boolean contaDesativada) {
        this.contaDesativada = contaDesativada;
    }

    public Boolean getRecebeMensagemEmail() {
        return recebeMensagemEmail;
    }

    public void setRecebeMensagemEmail(Boolean recebeMensagemEmail) {
        this.recebeMensagemEmail = recebeMensagemEmail;
    }

    public String getCelularPrincipal() {
        return celularPrincipal;
    }

    public void setCelularPrincipal(String celularPrincipal) {
        this.celularPrincipal = celularPrincipal;
    }

    public String getEmailPrincipal() {
        return emailPrincipal;
    }

    public void setEmailPrincipal(String emailPrincipal) {
        this.emailPrincipal = emailPrincipal;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    public String getSituacaoMacom() {
        return situacaoMacom;
    }

    public void setSituacaoMacom(String situacaoMacom) {
        this.situacaoMacom = situacaoMacom;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public LocalDate getDataIniciacao() {
        return dataIniciacao;
    }

    public void setDataIniciacao(LocalDate dataIniciacao) {
        this.dataIniciacao = dataIniciacao;
    }

    public LocalDate getDataElevacao() {
        return dataElevacao;
    }

    public void setDataElevacao(LocalDate dataElevacao) {
        this.dataElevacao = dataElevacao;
    }

    public LocalDate getDataExaltacao() {
        return dataExaltacao;
    }

    public void setDataExaltacao(LocalDate dataExaltacao) {
        this.dataExaltacao = dataExaltacao;
    }

    public String getEnderecoResidencial() {
        return enderecoResidencial;
    }

    public void setEnderecoResidencial(String enderecoResidencial) {
        this.enderecoResidencial = enderecoResidencial;
    }

    public String getBairroResidencial() {
        return bairroResidencial;
    }

    public void setBairroResidencial(String bairroResidencial) {
        this.bairroResidencial = bairroResidencial;
    }

    public String getCidadeResidencial() {
        return cidadeResidencial;
    }

    public void setCidadeResidencial(String cidadeResidencial) {
        this.cidadeResidencial = cidadeResidencial;
    }

    public String getUfResidencial() {
        return ufResidencial;
    }

    public void setUfResidencial(String ufResidencial) {
        this.ufResidencial = ufResidencial;
    }

    public String getCepResidencial() {
        return cepResidencial;
    }

    public void setCepResidencial(String cepResidencial) {
        this.cepResidencial = cepResidencial;
    }

}