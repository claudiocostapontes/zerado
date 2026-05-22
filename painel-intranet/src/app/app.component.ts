import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembrosComponent } from './membros/membros.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MembrosComponent],
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
                  <button (click)="fazerLogout()" class="btn-sair">Voltar</button>
              </header>

              <div class="painel-interno">
                  <h1>Painel do Obreiro</h1>
                  <div class="grade-funcoes">
                      <div class="card-interno" (click)="modalMembrosAberto = true">
                          <div class="icone">👥</div>
                          <h3>Quadro de Membros</h3>
                      </div>
                      <div class="card-interno">
                          <div class="icone">💰</div>
                          <h3>Tesouraria</h3>
                      </div>
                      <div class="card-interno">
                          <div class="icone">📜</div>
                          <h3>Atas de Reunião</h3>
                      </div>
                      <div class="card-interno">
                          <div class="icone">📅</div>
                          <h3>Calendário de Graus</h3>
                      </div>
                  </div>
              </div>
          </div>
        </ng-container>

      </main>

      <footer *ngIf="!usuarioLogado">
        <p>Loja Maçônica Guardiões do Templo Nº 3544 | QE 40 Área Especial Nº 6 | CNPJ: 19.246.642/0001-01</p>
      </footer>

      @if (modalMembrosAberto) {
        <app-membros (fechar)="modalMembrosAberto = false"></app-membros>
      }
    </div>
  `,
  styles: [`
    /* -----------------------------------------------------------
       AMBIENTE PÚBLICO
    ----------------------------------------------------------- */
    .layout-principal { 
      font-family: 'Segoe UI', sans-serif; 
      min-height: 100vh; 
      display: flex; 
      flex-direction: column; 
      transition: 0.5s;
      background: url('/assets/arca.jpg') no-repeat center center fixed; 
      background-size: cover; 
    }

    .main-header { 
      display: flex; 
      justify-content: space-between; /* Distribui logo na esquerda, menu no centro e espaço na direita */
      align-items: center; 
      padding: 15px 40px; 
      background: rgba(0,0,0,0.4); 
      border-bottom: 2px solid #d4af37;
    }

    .logo-container { width: 150px; } /* Fixa a largura para ajudar no alinhamento central do menu */
    .logo-container img { height: 70px; }

    /* MENU CENTRALIZADO */
    .nav-centralizada { 
      flex: 1; /* Faz o menu ocupar o espaço livre e ficar no centro exato */
      display: flex; 
      justify-content: center; 
    }
    
    .header-espacador { width: 150px; } /* Contrapeso invisível para a logo */

    nav ul.menu { list-style: none; display: flex; gap: 25px; padding: 0; margin: 0; }
    
    nav ul li a { 
      cursor: pointer; 
      color: #fff; 
      font-weight: 800; 
      text-transform: uppercase;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
      font-size: 14px;
      padding: 5px 10px;
      text-decoration: none;
    }
    nav ul li a:hover, nav ul li a.active { color: #d4af37; }

    .conteudo-central { flex: 1; display: flex; justify-content: center; align-items: center; padding: 20px; }

    h1 { color: #d4af37; text-shadow: 2px 2px 5px #000; font-size: 2.5rem; text-align: center; }
    .subtitulo { color: #fff; text-shadow: 2px 2px 5px #000; font-size: 1.2rem; }

    .caixa-login { 
      background: rgba(255, 255, 255, 0.95); padding: 40px; border-radius: 8px; 
      width: 100%; max-width: 350px; border-top: 5px solid #d4af37; box-shadow: 0 10px 30px #000;
    }
    .form-group { margin-bottom: 15px; text-align: left; }
    .form-group label { display: block; font-weight: bold; color: #333; margin-bottom: 5px; }
    .input-login { width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; }
    .btn-entrar { background: #d4af37; color: #000; width: 100%; padding: 12px; border: none; font-weight: bold; cursor: pointer; border-radius: 5px; margin-top: 10px; transition: 0.3s; }
    .btn-entrar:hover { background: #b8962e; }

    footer { background: transparent; color: #fff; text-align: center; padding: 20px; border-top: 1px solid #d4af37; text-shadow: 1px 1px 2px #000; }

    /* -----------------------------------------------------------
       AMBIENTE RESTRITO (INTRANET)
    ----------------------------------------------------------- */
    .modo-restrito { 
      background: #1a1a2e !important; 
      background-image: none !important;
    }

    .ambiente-restrito { width: 100%; height: 100%; display: flex; flex-direction: column; }

    .header-interno { 
      background: #16213e; padding: 15px 30px; display: flex; 
      justify-content: space-between; align-items: center; color: #fff;
      border-bottom: 2px solid #0f3460;
    }

    .btn-sair { background: #e94560; color: #fff; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer; transition: 0.3s; font-weight: bold; }
    .btn-sair:hover { background: #c83b52; }

    .painel-interno { padding: 40px; text-align: center; }

    .grade-funcoes { 
      display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
      gap: 20px; margin-top: 30px; 
    }

    .card-interno { 
      background: #0f3460; padding: 30px; border-radius: 10px; color: #fff; 
      cursor: pointer; transition: 0.3s; border: 1px solid #16213e;
    }
    .card-interno:hover { background: #d4af37; color: #000; transform: translateY(-5px); }
    .icone { font-size: 40px; margin-bottom: 10px; }

    .animacao-fade { animation: fadeIn 0.4s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

    @media (max-width: 900px) {
        .main-header { flex-direction: column; gap: 15px; }
        .header-espacador, .logo-container { width: auto; }
        nav ul.menu { flex-wrap: wrap; justify-content: center; gap: 15px; }
    }
  `]
})
export class AppComponent {
  // A tela começa no 'home' (Início) por padrão. O formulário de login fica escondido.
  telaAtual: string = 'home';
  usuarioLogado: boolean = false;
  modalMembrosAberto: boolean = false;

  fazerLogin() {
    this.usuarioLogado = true;
  }

  // Quando o usuário sai do sistema, a variável desliga o ambiente restrito e garante que voltamos para a tela de 'Início'
  fazerLogout() {
    this.usuarioLogado = false;
    this.telaAtual = 'home'; 
  }
}