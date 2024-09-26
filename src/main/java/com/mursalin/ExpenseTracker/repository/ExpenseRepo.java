package com.mursalin.ExpenseTracker.repository;

import com.mursalin.ExpenseTracker.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;

@Repository
public interface ExpenseRepo extends JpaRepository<Expense, Long> {

    @Query("select sum(e.expense) from Expense e")
    BigDecimal sumOfExpense();
}
