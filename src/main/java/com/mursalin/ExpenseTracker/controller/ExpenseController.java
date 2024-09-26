package com.mursalin.ExpenseTracker.controller;

import com.mursalin.ExpenseTracker.model.Expense;
import com.mursalin.ExpenseTracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class ExpenseController {

    private ExpenseService service;

    @Autowired
    public void setService(ExpenseService service) {
        this.service = service;
    }

//    @RequestMapping("/")
//    public String homepage() {
//        return "index.html ";
//    }

    @GetMapping("/getExpense")
    public ResponseEntity<List<Expense>> getExpense() {
        BigDecimal totalExpense = service.getTotalExpence();
        System.out.println(totalExpense);
        return new ResponseEntity<>(service.getExpense(), HttpStatus.OK);
    }

    @PostMapping("/addExpense")
    public ResponseEntity<?> addExpense(@RequestBody Expense expense) {
        service.addExpense(expense);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/updateExpense")
    public ResponseEntity<?> updateExpense(@RequestBody Expense expense) {
        service.updateExpense(expense);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/deleteExpense/{id}")
    public ResponseEntity<?> deleteExpense(@PathVariable Long id) {
        service.deleteExpense(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}


