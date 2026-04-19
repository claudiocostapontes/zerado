package zerado.controller;

import zerado.model.Membro;
import zerado.repository.MembroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/membros")
@CrossOrigin(origins = "http://localhost:3001")
public class MembroController {

    @Autowired
    private MembroRepository repository;

    @GetMapping
    public List<Membro> listarTodos() {
        return repository.findAll();
    }
}