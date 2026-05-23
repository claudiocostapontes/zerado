import { Component, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';

interface Membro {
  id?: number;
  nomeCompleto: string | null;
  cpf: string | null;
  celularPrincipal: string | null;
}

@Component({
  selector: 'app-membros',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-backdrop" (click)="fecharModal()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <span class="close-btn" (click)="fecharModal()">&times;</span>
        
        <h2>Consulta de Membros</h2>
        
        <div class="upload-container">
          <label for="uploadExcel" class="btn-upload">📄 Importar Planilha</label>
          <input type="file" id="uploadExcel" accept=".xlsx, .xls" style="display: none;" (change)="importarPlanilha($event)" />
        </div>
        
        <hr>
        
        <div class="tabela-wrapper">
            <table class="tabela-membros">
            <thead>
                <tr>
                <th>ID</th>
                <th>Obreiros</th>
                <th>CPF</th>
                <th>Contato</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngIf="carregando"><td colspan="4" class="text-center">Carregando dados...</td></tr>
                <tr *ngIf="!carregando && membros.length === 0"><td colspan="4" class="text-center">Nenhum obreiro cadastrado.</td></tr>
                <tr *ngFor="let membro of membros">
                <td>{{ membro.id || '-' }}</td>
                <td>{{ membro.nomeCompleto || '-' }}</td>
                <td>{{ membro.cpf || '-' }}</td>
                <td>{{ membro.celularPrincipal || '-' }}</td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6); z-index: 1000; display: flex; justify-content: center; align-items: center; padding: 10px; }
    .modal-content { background: white; padding: 20px; border-radius: 8px; width: 100%; max-width: 900px; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    h2 { color: #2c3e50; margin-top: 0; font-size: 1.5rem; }
    .close-btn { position: absolute; right: 15px; top: 10px; font-size: 28px; cursor: pointer; color: #7f8c8d; }
    .close-btn:hover { color: #e74c3c; }
    
    .upload-container { margin-bottom: 15px; text-align: right; }
    .btn-upload { background-color: #2c3e50; color: white; padding: 10px 15px; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold; display: inline-block; transition: 0.3s; }
    .btn-upload:hover { background-color: #1a252f; }
    
    hr { border: 1px solid #eee; margin-bottom: 15px; }
    
    .tabela-wrapper { overflow-x: auto; max-height: 60vh; overflow-y: auto; }
    .tabela-membros { width: 100%; border-collapse: collapse; min-width: 500px; }
    .tabela-membros th, .tabela-membros td { border: 1px solid #ddd; padding: 10px; text-align: left; }
    .tabela-membros th { position: sticky; top: 0; background-color: #2c3e50; color: white; z-index: 2; }
    .tabela-membros tr:nth-child(even) { background-color: #f9f9f9; }
    .text-center { text-align: center; padding: 15px; }

    /* DESIGN RESPONSIVO PARA O MODAL */
    @media (max-width: 600px) {
        .upload-container { text-align: center; }
        .btn-upload { width: 100%; display: block; box-sizing: border-box; }
        .modal-content { padding: 15px 10px; }
        h2 { font-size: 1.2rem; margin-right: 20px; }
    }
  `]
})
export class MembrosComponent implements OnInit {
  @Output() fechar = new EventEmitter<void>();
  private http = inject(HttpClient);
  membros: Membro[] = [];
  carregando: boolean = true;
  private readonly API_URL = 'http://localhost:8080/api/membros';

  ngOnInit(): void { this.buscarMembros(); }
  fecharModal(): void { this.fechar.emit(); }

  buscarMembros(): void {
    this.carregando = true;
    this.http.get<Membro[]>(this.API_URL).subscribe({
      next: (dados) => { this.membros = dados; this.carregando = false; },
      error: (erro) => { console.error('Erro:', erro); this.carregando = false; }
    });
  }

  importarPlanilha(event: any): void {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) return;
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      try {
        const wb: XLSX.WorkBook = XLSX.read(e.target.result, { type: 'binary' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(ws, { range: 1 }) as any[];
        if (data.length === 0) return alert('Planilha vazia.');
        
        const membrosFormatados: Membro[] = data.map(linha => ({
          nomeCompleto: linha['Obreiros'] || null, cpf: linha['CPF'] ? String(linha['CPF']) : null, celularPrincipal: linha['Contato'] ? String(linha['Contato']) : null,
          aposentado: false, alterarSenhaProximoLogin: false, contaDesativada: false, recebeMensagemEmail: true, doadorSangue: false, doadorMedula: false, doadorOrgaos: false
        }));
        this.salvarMembros(membrosFormatados);
      } catch (erro) { alert('Falha na leitura.'); }
      event.target.value = '';
    };
    reader.readAsBinaryString(target.files[0]);
  }

  private salvarMembros(payload: Membro[]): void {
    this.http.post(this.API_URL + '/importar', payload).subscribe({
      next: () => { alert('Planilha importada!'); this.buscarMembros(); },
      error: () => alert('Erro ao salvar no banco.')
    });
  }
}