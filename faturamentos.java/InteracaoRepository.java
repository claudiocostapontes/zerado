package com.example.billing.repository;

import com.example.billing.entity.Interacao;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InteracaoRepository extends JpaRepository<Interacao, Long> {
}