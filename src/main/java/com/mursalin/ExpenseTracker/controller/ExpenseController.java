package com.mursalin.ExpenseTracker.controller;

import com.mursalin.ExpenseTracker.model.Expense;
import com.mursalin.ExpenseTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ExpenseController {

    private ExpenseService service;

    @Autowired
    public void setService(ExpenseService service) {
        this.service = service;
    }

    @GetMapping("/")
    public String homepage() {
        return "Welcome to the homepage of expense tracker ";
    }

    @GetMapping("/getExpense")
    public List<Expense> getExpense() {
        return service.getExpense();
    }

    @PostMapping("/addExpense{expense}")
    public void addExpense(@RequestBody Expense expense) {
        service.addExpense(expense);
    }

    @PutMapping("/addExpense{expense}")
    public void updateExpense(@RequestBody Expense expense) {
        service.updateExpense(expense);
    }

    @DeleteMapping("/deleteExpense{id}")
    public void deleteExpense(@PathVariable Long id) {
        service.deleteExpense(id);
    }
}


