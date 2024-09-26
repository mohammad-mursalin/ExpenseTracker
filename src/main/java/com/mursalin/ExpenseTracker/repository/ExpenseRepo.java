package com.mursalin.ExpenseTracker.repository;

import com.mursalin.ExpenseTracker.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExpenseRepo extends JpaRepository<Expense, Long> {
}
