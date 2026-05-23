import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout-principal" [class.modo-restrito]="usuarioLogado">

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
          <div class="ambiente-restrito animacao-fade">
              <header class="header-interno">
                  <span>Bem-vindo, Irmão Obreiro</span>

                  <div class="botoes-header">
                      <button *ngIf="telaAtual !== 'intranet'" (click)="telaAtual = 'intranet'" class="btn-voltar">Voltar ao Menu</button>
                      <button (click)="fazerLogout()" class="btn-sair">Sair do Sistema</button>
                  </div>

              </header>

              <div class="painel-interno">

                  @if (telaAtual === 'intranet') {
                      <h1>Painel da Loja</h1>
                        <div class="grade-funcoes animacao-fade">
                          <div class="card-interno" (click)="telaAtual = 'membros'">
                              <img src="/assets/matrix.jpg" alt="Membros" class="icone-imagem">
                              <h3></h3>
                          </div>
                          <div class="card-interno">
                              <img src="/assets/piramide-card.jpg" alt="Tesouraria" class="icone-imagem">
                              <h3></h3>
                          </div>
                          <div class="card-interno">
                              <img src="/assets/congresso-card.jpg" alt="Atas" class="icone-imagem">
                              <h3></h3>
                          </div>
                          <div class="card-interno">
                              <img src="/assets/nota-card.jpg" alt="Calendário de Eventos" class="icone-imagem">
                              <h3></h3>
                          </div>
                          <div class="card-interno">
                              <img src="/assets/piramide-verde-card.jpg" alt="GaleriaVeneráveis" class="icone-imagem">
                              <h3></h3>
                          </div>
                          <div class="card-interno">
                              <img src="/assets/olho-pedra.jpg" alt="Financeiro" class="icone-imagem">
                              <h3></h3>
                          </div>
                          <div class="card-interno">
                              <img src="/assets/compasso-biblia.jpg" alt="Documentação" class="icone-imagem">
                              <h3></h3>
                          </div>
                      </div>
                  }

                  @if (telaAtual === 'membros') {
                      <div class="tela-membros animacao-fade text-left">
                          <h2 style="color: #d4af37;">Consulta de Membros</h2>
                          <p style="color: #fff;">A tabela com os dados do banco será renderizada aqui...</p>
                      </div>
                  }

              </div>
          </div>
        </ng-container>

      </main>

      <footer *ngIf="!usuarioLogado">
        <p>Loja Maçônica Guardiões do Templo Nº 3544 | QE 40 Área Especial Nº 6 | CNPJ: 19.246.642/0001-01</p>
      </footer>

    </div>
  `,
  styles: [`
    /* AMBIENTE PÚBLICO */
    .layout-principal {
      font-family: 'Segoe UI', sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      transition: 0.5s;
      background: url('/assets/arca.jpg') no-repeat center center fixed; background-size: cover;
    }

    .main-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 40px;
      background: rgba(0,0,0,0.4);
      border-bottom: 2px solid #d4af37;
    }

    .logo-container {
      width: 150px;
    }

    .logo-container img {
      height: 70px;
    }
    .nav-centralizada {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .header-espacador {
      width: 150px;
    }

    nav ul.menu {
      list-style: none;
      display: flex;
      gap: 25px;
      padding: 0;
      margin: 0;
    }

    nav ul li a {
      cursor: pointer;
      color: #ffffff !important;
      text-decoration: none !important;
      font-weight: 800;
      text-transform: uppercase;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      font-size: 14px; padding: 5px 10px; transition: 0.3s;
    }

    nav ul li a:hover, nav ul li a.active {
      color: #d4af37 !important;
    }

    .conteudo-central {
      flex: 1; display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    h1 {
      color: #d4af37;
      text-shadow: 2px 2px 5px #000;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 10px;
    }

    .subtitulo {
      color: #fff;
      text-shadow: 2px 2px 5px #000;
      font-size: 1.2rem;
    }

    .text-center {
      text-align: center;
    }

    .text-left {
      text-align: left;
    }

    .caixa-login {
      background: rgba(255, 255, 255, 0.95);
      padding: 40px;
      border-radius: 8px;
      width: 100%;
      max-width: 350px;
      border-top: 5px solid #d4af37;
      box-shadow: 0 10px 30px #000;
      text-align: center;
    }

    .caixa-login h2 { margin-top: 0; color: #333; }
    .form-group { margin-bottom: 15px; text-align: left; }
    .form-group label { display: block; font-weight: bold; color: #333; margin-bottom: 5px; }
    .input-login { width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; }
    .btn-entrar { background: #d4af37; color: #000; width: 100%; padding: 12px; border: none; font-weight: bold; cursor: pointer; border-radius: 5px; margin-top: 10px; transition: 0.3s; }
    .btn-entrar:hover { background: #b8962e; }

    footer {
      background: transparent;
      color: #fff;
      text-align: center;
      padding: 20px;
      border-top: 1px solid #d4af37;
      text-shadow: 1px 1px 3px #000;
    }

    /* AMBIENTE RESTRITO (INTRANET) */
    .modo-restrito {
      /* Substitua 'fundo-intranet.jpg' pelo nome da sua imagem */
      background: url('/assets/squarevintage.jpg') no-repeat center center fixed !important;
      background-size: cover !important;
    }

    .ambiente-restrito
    { width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    /* CABEÇALHO INTERNO - Fundo transparente (sem a faixa azul) */
    .header-interno {
      background: transparent !important; /* Transforma a faixa em invisível */
      padding: 15px 30px;
      display: flex !important;
      flex-direction: row !important;
      justify-content: space-between !important;
      align-items: center !important;
      color: #fff;
      border-bottom: none !important; /* Remove a linha de baixo da faixa */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8); /* Adiciona uma sombra no texto para ele não sumir na imagem clara */
    }

    /* CAIXA DOS BOTÕES */
    .botoes-header {
      display: flex;
      gap: 15px; /* Espaço entre o botão Sair e o Voltar (quando ele aparecer) */
      align-items: center;
    }

    /* O botão voltar agora precisa empurrar o item que está à esquerda dele */
    .btn-voltar {
      background: #4a69bd; color: #fff; border: none; padding: 8px 15px;
      border-radius: 5px; cursor: pointer; transition: 0.3s; font-weight: bold;
      margin: 0 !important;
    }
    .btn-voltar:hover {
      background: #3c559c;
    }

    .btn-sair {
      background: #1648d3;
      color: #fff;
      border: none;
      padding: 8px 15px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: bold;
      margin: 0 !important;
    }

    .btn-sair:hover {
      background: #c83b52;
    }

    .grade-funcoes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 15px; /* Reduz o espaço em branco entre um card e outro */
      margin-top: 30px;
    }

    .painel-interno {
      padding: 40px;
      text-align: center;
      width: 100%;
      max-width: 1000px;
      margin: 0 auto;
    }

    .card-interno {
      background: #d6b854;
      padding: 5px; /* Aqui é onde o card "emagrece" */
      border-radius: 10px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.3s;
      border: 1px solid #16213e;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* DOMANDO AS IMAGENS JPG/PNG DOS CARDS */
    .icone-imagem {
      width: 40px;      /* Largura fixa desejada na tela */
      height: 40px;     /* Altura fixa desejada na tela */
      margin-bottom: 5px;
      object-fit: contain; /* ESSENCIAL: Mantém as proporções do símbolo sem esticar */
    }

    .card-interno:hover {
      background: #d4af37;
      color: #000;
      transform: translateY(-5px);
    }

    .card-interno h3 {
      font-size: 12px; /* Tamanho da letra menor */
      margin: 0;
      text-align: center;
    }

    .icone {
      font-size: 10px;
      margin-bottom: 8px;
    }

    .animacao-fade {
      animation: fadeIn 0.4s ease;
    }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 900px) {
        .main-header { flex-direction: column; gap: 15px; }
        .header-espacador, .logo-container { width: auto; }
        nav ul.menu { flex-wrap: wrap; justify-content: center; gap: 15px; }
    }
  `]
})

export class AppComponent {
  telaAtual: string = 'home';
  usuarioLogado: boolean = false;

  fazerLogin() {
    this.usuarioLogado = true;
    this.telaAtual = 'intranet'; // Ao logar, joga direto para os cards
  }

  fazerLogout() {
    this.usuarioLogado = false;
    this.telaAtual = 'home';
  }
}
