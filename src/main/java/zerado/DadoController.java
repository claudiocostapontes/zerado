package zerado;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DadoController {
    @GetMapping("/api/dados")
    public String getDados() {
        return "{\"mensagem\": \"Olá do back-end!\"}";
    }
}