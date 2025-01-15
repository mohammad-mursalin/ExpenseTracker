package com.mursalin.ExpenseTracker.service;

import com.mursalin.ExpenseTracker.model.Expense;
import com.mursalin.ExpenseTracker.repository.ExpenseRepo;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ExpenseService {

    private ExpenseRepo repo;

    ExpenseService(ExpenseRepo repo) {
        this.repo = repo;
    }

    public List<Expense> getExpense() {
        return repo.findAll();
    }

    public void addExpense(Expense expense) {
        System.out.println(expense);
        repo.save(expense);
    }

    public void updateExpense(Expense expense) {
        System.out.println(expense);
        repo.save(expense);
    }

    public void deleteExpense(Long id) {
        repo.deleteById(id);
    }

    public BigDecimal getTotalExpense() { 
        return repo.sumOfExpense(); 
    }

    public Expense getExpenseById(Long id) {

        return repo.findById(id).get();
    }
}
