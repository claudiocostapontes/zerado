package com.example.billing.controller;

import com.example.billing.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PostMapping("/webhook")
    public void webhook(@RequestBody Map<String, Object> payload) {
        String action = (String) payload.get("action");
        if ("payment.updated".equals(action)) {
            Map<String, Object> data = (Map<String, Object>) payload.get("data");
            String status = (String) data.get("status");
            String externalReference = (String) data.get("external_reference");
            if ("approved".equals(status) && externalReference.startsWith("fatura_")) {
                Long faturaId = Long.parseLong(externalReference.split("_")[1]);
                billingService.confirmarPagamento(faturaId);
            }
        }
    }
}