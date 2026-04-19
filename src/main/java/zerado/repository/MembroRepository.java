package zerado.repository;

import zerado.model.Membro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface MembroRepository extends JpaRepository<Membro, Long> {

    Optional<Membro> findByCpf(String cpf);
    Optional<Membro> findByCim(String cim);
    List<Membro> findByNomeCompletoContainingIgnoreCase(String nome);
    List<Membro> findBySituacaoMacom(String situacaoMacom);
    Optional<Membro> findByEmailPrincipal(String emailPrincipal);
    List<Membro> findByOrganizacaoTrabalhoContainingIgnoreCase(String organizacao);
}