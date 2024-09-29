$(document).ready(function() {
  // Handle form submission for adding expenses
  $("#addExpenseForm").submit(function(e) {
    e.preventDefault(); // Prevent default form submission

    var newExpense = {
      description: $("#description").val(),
      expense: $("#amount").val()
    };

    $.ajax({
      url: "/addExpense",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(newExpense),
      success: function(response) {
        alert('Expense added successfully!');
        window.location.href = '/'; // Redirect to the expense list
      },
      error: function(error) {
        alert('Error adding expense: ' + error.responseText);
      }
    });
  });

  // Handle form submission for updating expenses
  $("#updateExpenseForm").submit(function(e) {
    e.preventDefault(); // Prevent default form submission

    var updatedExpense = {
      id: $('input[name=id]').val(),
      description: $("#description").val(),
      expense: $("#expense").val()
    };

    $.ajax({
      url: "/updateExpense",
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(updatedExpense),
      success: function(response) {
        alert('Expense updated successfully!');
        window.location.href = '/'; // Redirect to the expense list
      },
      error: function(error) {
        alert('Error updating expense: ' + error.responseText);
      }
    });
  });

  // Fetch expense data
  fetchExpenseData();
});

function fetchExpenseData() {
    $.ajax({
        url: '/getExpense',
        type: 'GET',
        success: function(data) {
            // Process the received data
            // Update the table with the expense data
            var tableBody = $('#expenseTable tbody'); // Assuming your table body has ID "expenseTable"
            tableBody.empty(); // Clear existing rows
            $.each(data, function(index, expense) {
                var row = $('<tr></tr>');
                row.append('<td>' + expense.id + '</td>');
                row.append('<td>' + expense.description + '</td>'); // Corrected typo
                row.append('<td>' + expense.expense + '</td>');
                row.append('<td><a class="btn btn-primary btn-sm" href="/editExpense/' + expense.id + '"><i class="fas fa-pencil-alt"></i></a> <a class="btn btn-danger btn-sm" href="/deleteExpense/' + expense.id + '" onclick="return confirm(\'Are you sure you want to delete this expense?\');"><i class="fas fa-trash-alt"></i></a></td>');
                tableBody.append(row);
            });

            // Update total expense
            $('#totalAmount').text(data.totalAmount);
        },
        error: function(error) {
            console.error('Error fetching expense data:', error);
        }
    });
}