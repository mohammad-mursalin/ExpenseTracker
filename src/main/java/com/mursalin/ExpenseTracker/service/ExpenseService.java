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
        repo.save(expense);
    }

    public void updateExpense(Expense expense) {
        repo.save(expense);
    }

    public void deleteExpense(Long id) {
        repo.deleteById(id);
    }

    public BigDecimal getTotalExpence() {
        return repo.sumOfExpense();
    }
}
