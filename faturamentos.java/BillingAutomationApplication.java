package com.example.billing;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class BillingAutomationApplication {
    public static void main(String[] args) {
        SpringApplication.run(BillingAutomationApplication.class, args);
    }
}