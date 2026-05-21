package zerado.controller; // Ajuste o pacote conforme o seu projeto

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import zerado.model.Membro;
import zerado.repository.MembroRepository;

import java.util.List;

@RestController
@RequestMapping("/api/membros")
@CrossOrigin(origins = "*")
public class MembroController {

    @Autowired
    private MembroRepository membroRepository;

    // 1. Rota para IMPORTAR e SALVAR a planilha no banco
    @PostMapping("/importar")
    public ResponseEntity<?> importarMembrosExcel(@RequestBody List<Membro> membrosExcel) {
        try {
            // O saveAll faz a inserção em lote (batch), resolvendo o travamento do banco
            membroRepository.saveAll(membrosExcel);
            return ResponseEntity.ok().body("Membros importados com sucesso para o banco de dados!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao salvar os membros: " + e.getMessage());
        }
    }

    // 2. Rota para BUSCAR os membros e exibir no seu Modal
    @GetMapping
    public ResponseEntity<List<Membro>> listarTodosOsMembros() {
        try {
            List<Membro> lista = membroRepository.findAll();
            return ResponseEntity.ok(lista);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}