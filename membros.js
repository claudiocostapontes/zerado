// =========================================================================
// PARTE 1: IMPORTAÇÃO DO EXCEL E SALVAMENTO NO BANCO
// =========================================================================
document.getElementById('uploadExcel').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            
            // LÊ AS LINHAS: O { range: 1 } obriga a pular a primeira linha vazia do seu Excel!
            const linhasExcel = XLSX.utils.sheet_to_json(worksheet, { range: 1 }) || [];
            
            if (linhasExcel.length === 0) {
                alert("Nenhum dado encontrado na planilha. Verifique a formatação do arquivo.");
                return;
            }
            
            // MAPEAMENTO: Transforma os nomes do Excel nos nomes da classe Membro.java
            const membrosFormatados = linhasExcel.map(linha => {
                return {
                    nomeCompleto: linha['Obreiros'] || null,
                    cpf: linha['CPF'] ? String(linha['CPF']) : null,
                    celularPrincipal: linha['Contato'] ? String(linha['Contato']) : null,
                    
                    // Valores padrão para evitar erro de banco
                    aposentado: false,
                    alterarSenhaProximoLogin: false,
                    contaDesativada: false,
                    recebeMensagemEmail: true,
                    doadorSangue: false,
                    doadorMedula: false,
                    doadorOrgaos: false
                };
            });

            // Envia para o Java
            fetch('http://localhost:8080/api/membros/importar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(membrosFormatados)            
            })
            .then(response => {
                if(response.ok) {
                    alert('Planilha importada com sucesso!');
                    document.getElementById('uploadExcel').value = ""; 
                    if (document.getElementById('meuModal').style.display === 'block') {
                        abrirModalEBuscarDados();
                    }
                } else {
                    alert('Erro ao salvar os dados no banco.');
                }
            })
            .catch(erro => console.error("Erro na requisição:", erro));
            
        } catch (erro) {
            console.error("Erro processando planilha:", erro);
            alert("Falha na leitura do Excel.");
        }
    };
    
    reader.readAsArrayBuffer(file);
});

// =========================================================================
// PARTE 2: BUSCA NO BANCO DE DADOS E EXIBIÇÃO NO MODAL
// =========================================================================
function abrirModalEBuscarDados() {
    document.getElementById('meuModal').style.display = 'block';
    const tbody = document.getElementById('corpo-tabela');
    tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Carregando dados...</td></tr>';

    fetch('http://localhost:8080/api/membros', { method: 'GET' })
    .then(response => {
        if (!response.ok) throw new Error('Falha ao buscar os dados');
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return response.json();
        }
        return [];
    })
    .then(membros => {
        tbody.innerHTML = ''; 
        if (!membros || !Array.isArray(membros) || membros.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Nenhum obreiro cadastrado.</td></tr>';
            return;
        }

        membros.forEach(membro => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${membro.id || ''}</td>
                <td>${membro.nomeCompleto || ''}</td>
                <td>${membro.cpf || ''}</td>
                <td>${membro.celularPrincipal || ''}</td>
            `;
            tbody.appendChild(tr);
        });
    })
    .catch(erro => {
        console.error("Erro no Get:", erro);
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color: red;">Erro de conexão.</td></tr>';
    });
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function fecharModal() {
    document.getElementById('meuModal').style.display = 'none';
}