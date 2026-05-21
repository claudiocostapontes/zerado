package zerado.repository; // Ajuste o pacote conforme o seu projeto

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import zerado.model.Membro; // Importe a classe Membro que criamos acima

@Repository
public interface MembroRepository extends JpaRepository<Membro, Long> {
    // Só isso! O Spring Boot já sabe como fazer o saveAll() e findAll() automaticamente.
}