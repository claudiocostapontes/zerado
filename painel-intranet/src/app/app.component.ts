import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DocumentoLoja {
  nome: string;
  url: string | null;
  selecionado: boolean; // Nova propriedade para controlar o checkbox
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout-principal"
         [class.modo-restrito]="telaAtual === 'intranet'"
         [class.modo-sistema]="telaAtual !== 'home' && telaAtual !== 'login' && telaAtual !== 'intranet'">

      <header class="main-header" *ngIf="!usuarioLogado">
        <div class="logo-container">
            <img src="/assets/logoguardioes.jpg" alt="Logo Guardiões">
        </div>

        <nav class="nav-centralizada">
            <ul class="menu">
                <li><a (click)="telaAtual = 'home'" [class.active]="telaAtual === 'home'">Início</a></li>
                <li><a (click)="telaAtual = 'maconaria'" [class.active]="telaAtual === 'maconaria'">Maçonaria</a></li>
                <li><a (click)="telaAtual = 'contato'" [class.active]="telaAtual === 'contato'">Contato</a></li>
                <li><a (click)="telaAtual = 'login'" [class.active]="telaAtual === 'login'">Intranet</a></li>
                <li><a (click)="telaAtual = 'fale-conosco'" [class.active]="telaAtual === 'fale-conosco'">Fale Conosco</a></li>
            </ul>
        </nav>

        <div class="header-espacador"></div>
      </header>

      <main class="conteudo-central">

        <ng-container *ngIf="!usuarioLogado">
          @if (telaAtual === 'home') {
            <div class="animacao-fade text-center">
                <h1>Loja Guardiões do Templo Nº 3544</h1>
                <p class="subtitulo"></p>
            </div>
          }

          @if (telaAtual === 'login') {
            <div class="animacao-fade caixa-login">
                <h2>Acesso Restrito</h2>
                <div class="form-group">
                    <label>E-mail ou CIM</label>
                    <input type="text" placeholder="Digite seu acesso" class="input-login">
                </div>
                <div class="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" class="input-login">
                </div>
                <button class="btn-entrar" (click)="fazerLogin()">Entrar na Intranet</button>
            </div>
          }
        </ng-container>

        <ng-container *ngIf="usuarioLogado">

          @if (telaAtual === 'intranet') {
              <div class="ambiente-restrito animacao-fade">
                  <header class="header-interno">
                      <span>Bem-vindo, Irmão Obreiro</span>
                      <div class="botoes-header">
                          <button (click)="fazerLogout()" class="btn-sair">Sair do Sistema</button>
                      </div>
                  </header>

                  <div class="painel-interno">
                      <h1>Painel da Loja</h1>
                        <div class="grade-funcoes animacao-fade">
                          <div class="card-interno" (click)="telaAtual = 'membros'">
                              <img src="/assets/matrix.jpg" alt="Membros" class="icone-imagem">
                              <h3>Quadro de Membros</h3>
                          </div>
                          <div class="card-interno" (click)="telaAtual = 'tesouraria'">
                              <img src="/assets/piramide-card.jpg" alt="Tesouraria" class="icone-imagem">
                              <h3>Tesouraria</h3>
                          </div>
                          <div class="card-interno" (click)="telaAtual = 'atas'">
                              <img src="/assets/congresso-card.jpg" alt="Atas" class="icone-imagem">
                              <h3>Atas de Reunião</h3>
                          </div>
                          <div class="card-interno" (click)="telaAtual = 'calendario'">
                              <img src="/assets/nota-card.jpg" alt="Calendário de Eventos" class="icone-imagem">
                              <h3>Calendário de Graus</h3>
                          </div>
                          <div class="card-interno" (click)="telaAtual = 'veneraveis'">
                              <img src="/assets/piramide-verde-card.jpg" alt="GaleriaVeneráveis" class="icone-imagem">
                              <h3>Galeria dos Veneráveis</h3>
                          </div>
                          <div class="card-interno" (click)="telaAtual = 'balanco'">
                              <img src="/assets/olho-pedra.jpg" alt="Financeiro" class="icone-imagem">
                              <h3>Balanço Financeiro</h3>
                          </div>
                          <div class="card-interno" (click)="telaAtual = 'documentacao'">
                              <img src="/assets/compasso-biblia.jpg" alt="Documentação" class="icone-imagem">
                              <h3>Documentação Geral</h3>
                          </div>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'membros') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>👥 Gestão de Obreiros</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">
                          <h2 style="color: #333; margin-top: 0;">Quadro Geral de Obreiros</h2>
                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">
                          <p style="color: #666;">A tabela de dados vinda do banco será renderizada neste espaço branco e limpo.</p>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'tesouraria') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>💰 Controle de Tesouraria</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">
                          <h2 style="color: #333; margin-top: 0;">Mensalidades e Taxas</h2>
                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">
                          <p style="color: #666;">Área dedicada ao controle de pagamentos e inadimplências.</p>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'atas') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>📜 Atas de Reunião</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">
                          <h2 style="color: #333; margin-top: 0;">Registro de Sessões</h2>
                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">
                          <p style="color: #666;">Upload e leitura de atas das sessões ordinárias e magnas.</p>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'calendario') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>📅 Calendário de Graus</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">
                          <h2 style="color: #333; margin-top: 0;">Programação Anual</h2>
                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">
                          <p style="color: #666;">Agendamento de iniciações, elevações e exaltações.</p>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'veneraveis') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>🏛️ Galeria dos Veneráveis</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">
                          <h2 style="color: #333; margin-top: 0;">Ex-Veneráveis Mestres</h2>
                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">
                          <p style="color: #666;">Histórico fotográfico e mandatos dos Veneráveis da Loja.</p>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'balanco') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>📊 Balanço Financeiro</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">
                          <h2 style="color: #333; margin-top: 0;">Prestação de Contas</h2>
                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">
                          <p style="color: #666;">Relatórios detalhados de receitas, despesas e troncos.</p>
                      </div>
                  </div>
              </div>
          }

          @if (telaAtual === 'documentacao') {
              <div class="ambiente-sistema animacao-fade">
                  <header class="header-sistema">
                      <h2>📁 Documentação Geral</h2>
                      <div class="botoes-header">
                          <button (click)="telaAtual = 'intranet'" class="btn-voltar">⬅ Voltar ao Painel</button>
                          <button (click)="fazerLogout()" class="btn-sair">Sair</button>
                      </div>
                  </header>
                  <div class="conteudo-sistema">
                      <div class="card-tabela">

                          <div class="cabecalho-lista-doc">
                              <h2 style="color: #333; margin: 0;">Arquivos Oficiais da Loja</h2>
                          </div>

                          <hr style="border: 1px solid #eee; margin-bottom: 20px;">

                          <div class="barra-ferramentas-doc">
                              <input type="file" accept=".pdf" #uploadPdf style="display: none;" (change)="adicionarPdf(uploadPdf)">
                              <button class="btn-upload" (click)="uploadPdf.click()">➕ Incluir PDF</button>

                              <button class="btn-excluir-doc"
                                      *ngIf="temDocumentoSelecionado()"
                                      (click)="excluirSelecionados()">🗑️ Excluir Selecionados</button>
                          </div>

                          <ul class="lista-documentos">
                              @for (doc of listaDocumentos; track doc.nome; let i = $index) {
                                  <li [class.linha-selecionada]="doc.selecionado">
                                      <div class="doc-info">
                                          <input type="checkbox" [checked]="doc.selecionado" (change)="toggleSelecao(i)" style="cursor: pointer; transform: scale(1.3);">
                                          <span class="doc-icone">📕</span>
                                          <span class="doc-nome link-doc" (click)="visualizarDoc(doc)" title="Clique para abrir">{{ doc.nome }}</span>
                                      </div>
                                  </li>
                              } @empty {
                                  <div style="text-align: center; padding: 40px 20px;">
                                      <p style="color: #999; font-size: 16px;">Nenhum documento armazenado até o momento.</p>
                                      <p style="color: #ccc; font-size: 14px;">Clique em "➕ Incluir PDF" para enviar o primeiro arquivo.</p>
                                  </div>
                              }
                          </ul>
                      </div>
                  </div>
              </div>
          }

        </ng-container>

      </main>

      <footer *ngIf="!usuarioLogado">
        <p>Loja Maçônica Guardiões do Templo Nº 3544 | QE 40 Área Especial Nº 6 | CNPJ: 19.246.642/0001-01</p>
      </footer>

    </div>
  `,
  styles: [`
    /* ==========================================
       AMBIENTE PÚBLICO E BASE
       ========================================== */
    .layout-principal {
      font-family: 'Segoe UI', sans-serif; min-height: 100vh; display: flex;
      flex-direction: column; transition: 0.5s;
      background: url('/assets/arca.jpg') no-repeat center center fixed; background-size: cover;
    }

    .main-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 15px 40px; background: rgba(0,0,0,0.4); border-bottom: 2px solid #d4af37;
    }

    .logo-container { width: 150px; }
    .logo-container img { height: 70px; }
    .nav-centralizada { flex: 1; display: flex; justify-content: center; }
    .header-espacador { width: 150px; }

    nav ul.menu { list-style: none; display: flex; gap: 25px; padding: 0; margin: 0; }
    nav ul li a {
      cursor: pointer; color: #ffffff !important; text-decoration: none !important;
      font-weight: 800; text-transform: uppercase;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      font-size: 14px; padding: 5px 10px; transition: 0.3s;
    }
    nav ul li a:hover, nav ul li a.active { color: #d4af37 !important; }

    .conteudo-central { flex: 1; display: flex; justify-content: center; align-items: center; padding: 20px; }

    h1 { color: #d4af37; text-shadow: 2px 2px 5px #000; font-size: 2.5rem; text-align: center; margin-bottom: 10px; }
    .subtitulo { color: #fff; text-shadow: 2px 2px 5px #000; font-size: 1.2rem; }
    .text-center { text-align: center; }

    .caixa-login {
      background: rgba(255, 255, 255, 0.95); padding: 40px; border-radius: 8px; width: 100%;
      max-width: 350px; border-top: 5px solid #d4af37; box-shadow: 0 10px 30px #000; text-align: center;
    }
    .caixa-login h2 { margin-top: 0; color: #333; }
    .form-group { margin-bottom: 15px; text-align: left; }
    .form-group label { display: block; font-weight: bold; color: #333; margin-bottom: 5px; }
    .input-login { width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; }
    .btn-entrar { background: #d4af37; color: #000; width: 100%; padding: 12px; border: none; font-weight: bold; cursor: pointer; border-radius: 5px; margin-top: 10px; transition: 0.3s; }
    .btn-entrar:hover { background: #b8962e; }

    footer {
      background: transparent; color: #fff; text-align: center; padding: 20px;
      border-top: 1px solid #d4af37; text-shadow: 1px 1px 3px #000;
    }

    /* ==========================================
       AMBIENTE 1: INTRANET (PAINEL DE CARDS)
       ========================================== */
    .modo-restrito {
      background: url('/assets/squarevintage.jpg') no-repeat center center fixed !important;
      background-size: cover !important;
    }

    .ambiente-restrito { width: 100%; height: 100%; display: flex; flex-direction: column; }

    .header-interno {
      background: transparent !important; padding: 15px 30px; display: flex !important;
      flex-direction: row !important; justify-content: space-between !important;
      align-items: center !important; color: #fff; border-bottom: none !important;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    .painel-interno { padding: 40px; text-align: center; width: 100%; max-width: 1000px; margin: 0 auto; }
    .grade-funcoes { display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); gap: 15px; margin-top: 30px; }

    .card-interno {
      background: #d6b854; padding: 5px; border-radius: 10px; color: #ffffff;
      cursor: pointer; transition: 0.3s; border: 1px solid #16213e; display: flex;
      flex-direction: column; align-items: center; justify-content: center;
    }
    .card-interno:hover { background: #d4af37; color: #000; transform: translateY(-5px); }
    .card-interno h3 { font-size: 12px; margin: 0; text-align: center; }
    .icone-imagem { width: 40px; height: 40px; margin-bottom: 5px; object-fit: contain; }

    /* ==========================================
       AMBIENTE 2: TELAS DE SISTEMA
       ========================================== */
    .modo-sistema { background: #eaeff5 !important; }
    .ambiente-sistema { width: 100%; height: 100%; display: flex; flex-direction: column; }

    .header-sistema {
      background: #16213e; padding: 15px 30px; display: flex; justify-content: space-between; align-items: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-bottom: 3px solid #d4af37;
    }
    .header-sistema h2 { margin: 0; font-size: 1.5rem; color: #fff; }

    .conteudo-sistema { padding: 40px; width: 100%; max-width: 1200px; margin: 0 auto; flex: 1; }

    .card-tabela {
      background: #ffffff; padding: 30px; border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05); text-align: left; min-height: 400px;
    }

    /* ESTILOS DA BARRA DE FERRAMENTAS E LISTA */
    .cabecalho-lista-doc { margin-bottom: 10px; }

    .barra-ferramentas-doc { display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; }

    .btn-upload {
      background: #27ae60; color: white; border: none; padding: 10px 20px;
      border-radius: 4px; font-weight: bold; cursor: pointer; transition: 0.3s;
    }
    .btn-upload:hover { background: #219653; }

    .btn-excluir-doc {
      background: #e74c3c; color: #fff; border: none; padding: 10px 20px;
      border-radius: 4px; cursor: pointer; font-weight: bold; transition: 0.3s;
    }
    .btn-excluir-doc:hover { background: #c0392b; }

    .lista-documentos { list-style: none; padding: 0; margin: 0; border: 1px solid #eee; border-radius: 4px; }

    .lista-documentos li {
      display: flex; justify-content: space-between; align-items: center;
      padding: 15px; border-bottom: 1px solid #eee; transition: background 0.2s;
    }
    .lista-documentos li:last-child { border-bottom: none; }
    .lista-documentos li:hover { background: #fdfaf2; }

    /* Destaca a linha inteira se marcada */
    .linha-selecionada { background-color: #fceceb !important; } /* Fundo levemente avermelhado indicando exclusão potencial */

    .doc-info { display: flex; align-items: center; gap: 15px; width: 100%; }
    .doc-icone { font-size: 20px; }

    /* Estilo para tornar o nome do arquivo um link clicável */
    .link-doc {
      font-weight: 600; color: #4a69bd; font-size: 15px; cursor: pointer;
      text-decoration: underline; transition: 0.2s;
    }
    .link-doc:hover { color: #1648d3; }

    /* ==========================================
       COMPARTILHADOS (BOTÕES E ANIMAÇÃO)
       ========================================== */
    .botoes-header { display: flex; gap: 15px; align-items: center; }
    .btn-voltar { background: #4a69bd; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; transition: 0.3s; font-weight: bold; margin: 0 !important; }
    .btn-voltar:hover { background: #3c559c; }
    .btn-sair { background: #1648d3; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; transition: 0.3s; font-weight: bold; margin: 0 !important; }
    .btn-sair:hover { background: #c83b52; }

    .animacao-fade { animation: fadeIn 0.4s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

    /* RESPONSIVIDADE GERAL */
    @media (max-width: 900px) {
        .main-header { flex-direction: column; gap: 15px; }
        .header-espacador, .logo-container { width: auto; }
        nav ul.menu { flex-wrap: wrap; justify-content: center; gap: 15px; }
        .painel-interno, .conteudo-sistema { padding: 20px; }
        .conteudo-central { padding: 10px; }
    }
    @media (max-width: 600px) {
        .header-interno, .header-sistema { flex-direction: column !important; gap: 15px; text-align: center; }
        .botoes-header { width: 100%; justify-content: center; }
        h1 { font-size: 2rem; }
        .subtitulo { font-size: 1rem; }
        .caixa-login { padding: 25px; }
        .barra-ferramentas-doc { flex-direction: column; width: 100%; }
        .barra-ferramentas-doc button { width: 100%; }
    }
  `]
})

export class AppComponent {
  telaAtual: string = 'home';
  usuarioLogado: boolean = false;

  listaDocumentos: DocumentoLoja[] = [];

  fazerLogin() {
    this.usuarioLogado = true;
    this.telaAtual = 'intranet';
  }

  fazerLogout() {
    this.usuarioLogado = false;
    this.telaAtual = 'home';
  }

  adicionarPdf(input: HTMLInputElement) {
    if (input.files && input.files.length > 0) {
      const arquivo = input.files[0];

      if (arquivo.name.toLowerCase().endsWith('.pdf')) {
        const urlTemporaria = URL.createObjectURL(arquivo);

        // Novo arquivo começa desmarcado
        this.listaDocumentos.push({
          nome: arquivo.name,
          url: urlTemporaria,
          selecionado: false
        });

      } else {
        alert('Por favor, selecione apenas arquivos no formato PDF.');
      }
      input.value = '';
    }
  }

  // Altera o status do checkbox clicado
  toggleSelecao(index: number) {
    this.listaDocumentos[index].selecionado = !this.listaDocumentos[index].selecionado;
  }

  // Verifica se o botão "Excluir Selecionados" deve aparecer
  temDocumentoSelecionado(): boolean {
    return this.listaDocumentos.some(doc => doc.selecionado === true);
  }

  // Abre o PDF clicado
  visualizarDoc(doc: DocumentoLoja) {
    if (doc.url) {
      window.open(doc.url, '_blank');
    }
  }

  // Exclui todos os arquivos que estiverem marcados com o checkbox
  excluirSelecionados() {
    // Conta quantos arquivos vão ser deletados
    const totalSelecionados = this.listaDocumentos.filter(doc => doc.selecionado).length;

    const confirmacao = confirm(`Tem certeza que deseja excluir ${totalSelecionados} documento(s) permanentemente?`);

    if (confirmacao) {
      // Filtra a lista, mantendo APENAS os documentos que NÃO estão selecionados
      this.listaDocumentos = this.listaDocumentos.filter(doc => doc.selecionado === false);
    }
  }
}
