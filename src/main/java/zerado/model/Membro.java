package zerado.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "membro")

public class Membro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome_completo")
    private String nomeCompleto;

    @Column(name = "nome_tratamento")
    private String nomeTratamento;

    private String login;

    private String senha;

    @Column(name = "alterar_senha_proximo_login")
    private Boolean alterarSenhaProximoLogin;

    @Column(name = "conta_desativada")
    private Boolean contaDesativada;

    @Column(name = "situacao_macom")
    private String situacaoMacom;

    private String cpf;

    private String cim;

    @Column(name = "email_principal")
    private String emailPrincipal;

    @Column(name = "recebe_mensagem_email")
    private Boolean recebeMensagemEmail;

    @Column(name = "outros_emails")
    private String outrosEmails;

    @Column(name = "data_nascimento")
    private LocalDate dataNascimento;

    private String naturalidade;

    @Column(name = "uf_naturalidade")
    private String ufNaturalidade;

    private String nacionalidade;

    private String religiao;

    @Column(name = "tipo_sanguineo")
    private String tipoSanguineo;

    @Column(name = "doador_sangue")
    private Boolean doadorSangue;

    @Column(name = "doador_medula")
    private Boolean doadorMedula;

    @Column(name = "doador_orgaos")
    private Boolean doadorOrgaos;

    @Column(name = "estado_civil")
    private String estadoCivil;

    @Column(name = "data_casamento")
    private LocalDate dataCasamento;

    private String sexo;

    @Column(name = "nome_pai")
    private String nomePai;

    @Column(name = "nome_mae")
    private String nomeMae;

    @Column(name = "titulo_eleitor")
    private String tituloEleitor;

    @Column(name = "zona_eleitoral")
    private String zonaEleitoral;

    @Column(name = "secao_eleitoral")
    private String secaoEleitoral;

    @Column(name = "numero_di")
    private String numeroDi;

    @Column(name = "tipo_di")
    private String tipoDi;

    @Column(name = "data_emissao_di")
    private LocalDate dataEmissaoDi;

    @Column(name = "uf_di")
    private String ufDi;

    @Column(name = "emissor_di")
    private String emissorDi;

    @Column(name = "endereco_residencial")
    private String enderecoResidencial;

    private String complemento_residencial;

    @Column(name = "bairro_residencial")
    private String bairroResidencial;

    @Column(name = "cidade_residencial")
    private String cidadeResidencial;

    @Column(name = "uf_residencial")
    private String ufResidencial;

    @Column(name = "cep_residencial")
    private String cepResidencial;

    @Column(name = "celular_principal")
    private String celularPrincipal;

    private String escolaridade;

    @Column(name = "formacao_academica")
    private String formacaoAcademica;

    private String profissao;

    private Boolean aposentado;

    private String especialidade;

    private String ocupacao;

    @Column(name = "organizacao_trabalho")
    private String organizacaoTrabalho;

    private String funcao;

    @Column(name = "endereco_profissional")
    private String enderecoProfissional;

    @Column(name = "bairro_profissional")
    private String bairroProfissional;

    @Column(name = "cidade_profissional")
    private String cidadeProfissional;

    @Column(name = "uf_profissional")
    private String ufProfissional;

    @Column(name = "cep_profissional")
    private String cepProfissional;

    @Column(name = "email_profissional")
    private String emailProfissional;

    @Column(name = "telefone_profissional")
    private String telefoneProfissional;

    @Column(columnDefinition = "TEXT")
    private String observacoes;

    @Column(name = "nome_esposa")
    private String nomeEsposa;

    @Column(name = "data_nascimento_esposa")
    private LocalDate dataNascimentoEsposa;

    @Column(name = "data_iniciacao")
    private LocalDate dataIniciacao;

    @Column(name = "data_elevacao")
    private LocalDate dataElevacao;

    @Column(name = "data_exaltacao")
    private LocalDate dataExaltacao;

    @Column(name = "data_instalacao")
    private LocalDate dataInstalacao;

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

    public String getNomeTratamento() {
        return nomeTratamento;
    }

    public void setNomeTratamento(String nomeTratamento) {
        this.nomeTratamento = nomeTratamento;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
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

    public String getSituacaoMacom() {
        return situacaoMacom;
    }

    public void setSituacaoMacom(String situacaoMacom) {
        this.situacaoMacom = situacaoMacom;
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

    public String getEmailPrincipal() {
        return emailPrincipal;
    }

    public void setEmailPrincipal(String emailPrincipal) {
        this.emailPrincipal = emailPrincipal;
    }

    public Boolean getRecebeMensagemEmail() {
        return recebeMensagemEmail;
    }

    public void setRecebeMensagemEmail(Boolean recebeMensagemEmail) {
        this.recebeMensagemEmail = recebeMensagemEmail;
    }

    public String getOutrosEmails() {
        return outrosEmails;
    }

    public void setOutrosEmails(String outrosEmails) {
        this.outrosEmails = outrosEmails;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getNaturalidade() {
        return naturalidade;
    }

    public void setNaturalidade(String naturalidade) {
        this.naturalidade = naturalidade;
    }

    public String getUfNaturalidade() {
        return ufNaturalidade;
    }

    public void setUfNaturalidade(String ufNaturalidade) {
        this.ufNaturalidade = ufNaturalidade;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getReligiao() {
        return religiao;
    }

    public void setReligiao(String religiao) {
        this.religiao = religiao;
    }

    public String getTipoSanguineo() {
        return tipoSanguineo;
    }

    public void setTipoSanguineo(String tipoSanguineo) {
        this.tipoSanguineo = tipoSanguineo;
    }

    public Boolean getDoadorSangue() {
        return doadorSangue;
    }

    public void setDoadorSangue(Boolean doadorSangue) {
        this.doadorSangue = doadorSangue;
    }

    public Boolean getDoadorMedula() {
        return doadorMedula;
    }

    public void setDoadorMedula(Boolean doadorMedula) {
        this.doadorMedula = doadorMedula;
    }

    public Boolean getDoadorOrgaos() {
        return doadorOrgaos;
    }

    public void setDoadorOrgaos(Boolean doadorOrgaos) {
        this.doadorOrgaos = doadorOrgaos;
    }

    public String getEstadoCivil() {
        return estadoCivil;
    }

    public void setEstadoCivil(String estadoCivil) {
        this.estadoCivil = estadoCivil;
    }

    public LocalDate getDataCasamento() {
        return dataCasamento;
    }

    public void setDataCasamento(LocalDate dataCasamento) {
        this.dataCasamento = dataCasamento;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getNomePai() {
        return nomePai;
    }

    public void setNomePai(String nomePai) {
        this.nomePai = nomePai;
    }

    public String getNomeMae() {
        return nomeMae;
    }

    public void setNomeMae(String nomeMae) {
        this.nomeMae = nomeMae;
    }

    public String getTituloEleitor() {
        return tituloEleitor;
    }

    public void setTituloEleitor(String tituloEleitor) {
        this.tituloEleitor = tituloEleitor;
    }

    public String getZonaEleitoral() {
        return zonaEleitoral;
    }

    public void setZonaEleitoral(String zonaEleitoral) {
        this.zonaEleitoral = zonaEleitoral;
    }

    public String getSecaoEleitoral() {
        return secaoEleitoral;
    }

    public void setSecaoEleitoral(String secaoEleitoral) {
        this.secaoEleitoral = secaoEleitoral;
    }

    public String getNumeroDi() {
        return numeroDi;
    }

    public void setNumeroDi(String numeroDi) {
        this.numeroDi = numeroDi;
    }

    public String getTipoDi() {
        return tipoDi;
    }

    public void setTipoDi(String tipoDi) {
        this.tipoDi = tipoDi;
    }

    public LocalDate getDataEmissaoDi() {
        return dataEmissaoDi;
    }

    public void setDataEmissaoDi(LocalDate dataEmissaoDi) {
        this.dataEmissaoDi = dataEmissaoDi;
    }

    public String getUfDi() {
        return ufDi;
    }

    public void setUfDi(String ufDi) {
        this.ufDi = ufDi;
    }

    public String getEmissorDi() {
        return emissorDi;
    }

    public void setEmissorDi(String emissorDi) {
        this.emissorDi = emissorDi;
    }

    public String getEnderecoResidencial() {
        return enderecoResidencial;
    }

    public void setEnderecoResidencial(String enderecoResidencial) {
        this.enderecoResidencial = enderecoResidencial;
    }

    public String getComplemento_residencial() {
        return complemento_residencial;
    }

    public void setComplemento_residencial(String complemento_residencial) {
        this.complemento_residencial = complemento_residencial;
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

    public String getCelularPrincipal() {
        return celularPrincipal;
    }

    public void setCelularPrincipal(String celularPrincipal) {
        this.celularPrincipal = celularPrincipal;
    }

    public String getEscolaridade() {
        return escolaridade;
    }

    public void setEscolaridade(String escolaridade) {
        this.escolaridade = escolaridade;
    }

    public String getFormacaoAcademica() {
        return formacaoAcademica;
    }

    public void setFormacaoAcademica(String formacaoAcademica) {
        this.formacaoAcademica = formacaoAcademica;
    }

    public String getProfissao() {
        return profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public Boolean getAposentado() {
        return aposentado;
    }

    public void setAposentado(Boolean aposentado) {
        this.aposentado = aposentado;
    }

    public String getEspecialidade() {
        return especialidade;
    }

    public void setEspecialidade(String especialidade) {
        this.especialidade = especialidade;
    }

    public String getOcupacao() {
        return ocupacao;
    }

    public void setOcupacao(String ocupacao) {
        this.ocupacao = ocupacao;
    }

    public String getOrganizacaoTrabalho() {
        return organizacaoTrabalho;
    }

    public void setOrganizacaoTrabalho(String organizacaoTrabalho) {
        this.organizacaoTrabalho = organizacaoTrabalho;
    }

    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    public String getEnderecoProfissional() {
        return enderecoProfissional;
    }

    public void setEnderecoProfissional(String enderecoProfissional) {
        this.enderecoProfissional = enderecoProfissional;
    }

    public String getBairroProfissional() {
        return bairroProfissional;
    }

    public void setBairroProfissional(String bairroProfissional) {
        this.bairroProfissional = bairroProfissional;
    }

    public String getCidadeProfissional() {
        return cidadeProfissional;
    }

    public void setCidadeProfissional(String cidadeProfissional) {
        this.cidadeProfissional = cidadeProfissional;
    }

    public String getUfProfissional() {
        return ufProfissional;
    }

    public void setUfProfissional(String ufProfissional) {
        this.ufProfissional = ufProfissional;
    }

    public String getCepProfissional() {
        return cepProfissional;
    }

    public void setCepProfissional(String cepProfissional) {
        this.cepProfissional = cepProfissional;
    }

    public String getEmailProfissional() {
        return emailProfissional;
    }

    public void setEmailProfissional(String emailProfissional) {
        this.emailProfissional = emailProfissional;
    }

    public String getTelefoneProfissional() {
        return telefoneProfissional;
    }

    public void setTelefoneProfissional(String telefoneProfissional) {
        this.telefoneProfissional = telefoneProfissional;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public String getNomeEsposa() {
        return nomeEsposa;
    }

    public void setNomeEsposa(String nomeEsposa) {
        this.nomeEsposa = nomeEsposa;
    }

    public LocalDate getDataNascimentoEsposa() {
        return dataNascimentoEsposa;
    }

    public void setDataNascimentoEsposa(LocalDate dataNascimentoEsposa) {
        this.dataNascimentoEsposa = dataNascimentoEsposa;
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

    public LocalDate getDataInstalacao() {
        return dataInstalacao;
    }

    public void setDataInstalacao(LocalDate dataInstalacao) {
        this.dataInstalacao = dataInstalacao;
    }
}
