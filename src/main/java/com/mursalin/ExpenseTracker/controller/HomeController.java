package com.mursalin.ExpenseTracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index.html"; // Serve the index.html file
    }

    @GetMapping("/addExpense")
    public String addExpensePage() {
        return "addExpense.html"; // Serve the index.html file
    }
}
