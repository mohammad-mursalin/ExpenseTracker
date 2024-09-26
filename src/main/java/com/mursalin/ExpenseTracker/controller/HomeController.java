package com.mursalin.ExpenseTracker.controller;

import com.mursalin.ExpenseTracker.model.Expense;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;

//@Controller
public class HomeController {

    @GetMapping("/")
    public String homePage() {
        return "index";
    }

//    @GetMapping("/addExpense")
//    public String addExpense(Model model) {
//        Expense expense = new Expense(); // Create a new Expense object
//        model.addAttribute("expense", expense); // Add it to the model
//        return "add-expense";
//    }
}
