
$(document).ready(function() {
    // Handle form submission for adding expenses
    $("#addExpenseForm").submit(function(e) {
        e.preventDefault();

        var newExpense = {
            discription: $("#description").val(),
            expense: $("#amount").val()
        };

        $.ajax({
            url: "/addExpense",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(newExpense),
            success: function(response) {
                alert('Expense added successfully!');
                window.location.href = '/';
            },
            error: function(error) {
                alert('Error adding expense: ' + error.responseText);
            }
        });
    });

    // Function to load the update expense page
    window.loadUpdateExpensePage = function(expenseId) {
        $.ajax({
            url: '/getExpenseById/' + expenseId,
            type: 'GET',
            success: function(expense) {
                renderUpdateExpensePage(expense);
            },
            error: function(error) {
                alert('Error fetching expense data: ' + error.responseText);
            }
        });
    };

    // Function to render the update expense form
    function renderUpdateExpensePage(expense) {
        var formHtml = `
            <h1 class="mt-5 form-heading">Update Expense</h1>
            <form id="updateExpenseForm">
                <input type="hidden" name="id" value="${expense.id}"/>
                <div class="form-group">
                    <label for="discription">Description:</label>
                    <input type="text" id="discription" name="discription" value="${expense.discription}" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="expense">Amount:</label>
                    <input type="text" id="expense" name="expense" value="${expense.expense}" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary">Update</button>
                <a class="btn btn-secondary" href="/getExpense">Cancel</a>
            </form>
        `;

        $('#updateFormContainer').html(formHtml);

        // Bind submit event to the new form
        $("#updateExpenseForm").off('submit').on('submit', function(e) {
            e.preventDefault();
            updateExpense(expense.id);
        });
    }

    // Function to update the expense
    function updateExpense(expenseId) {
        var updatedExpense = {
            id: expenseId,
            discription: $("#discription").val(),
            expense: $("#expense").val()
        };

        $.ajax({
            url: "/updateExpense",
            type: "PUT",
            contentType: "application/json",
            data: JSON.stringify(updatedExpense),
            success: function(response) {
                alert('Expense updated successfully!');
                window.location.href = '/'; // Redirect back to the index page
            },
            error: function(error) {
                alert('Error updating expense: ' + error.responseText);
            }
        });
    }

    // Fetch expense data when loading the index page
    fetchExpenseData();
    fetchTotalExpense();
});

// Function to fetch expense data
function fetchExpenseData() {
    $.ajax({
        url: '/getExpense',
        type: 'GET',
        success: function(data) {
            var tableBody = $('#expenseTable tbody');
            tableBody.empty();
            $.each(data, function(index, expense) {
                var row = $('<tr></tr>');
                row.append('<td>' + expense.id + '</td>');
                row.append('<td>' + expense.discription + '</td>');
                row.append('<td>' + expense.expense + '</td>');
                row.append(`
                    <td>
                        <a class="btn btn-primary btn-sm" href="#" onclick="loadUpdateExpensePage(${expense.id})">
                            <i class="fas fa-pencil-alt"></i>
                        </a>
                        <a class="btn btn-danger btn-sm" href="javascript:void(0);" onclick="deleteExpense(${expense.id});" >
                            <i class="fas fa-trash-alt"></i>
                        </a>
                    </td>
                `);
                tableBody.append(row);
            });
        },
        error: function(error) {
            console.error('Error fetching expense data:', error);
        }
    });
}

// Function to fetch total expense
function fetchTotalExpense() {
    $.ajax({
        url: '/getTotalExpense',
        type: 'GET',
        success: function(data) {
            $('#totalAmount').text(data);
        },
        error: function(error) {
            console.error('Error fetching total expense:', error);
        }
    });
}

// AJAX call to delete an expense
function deleteExpense(expenseId) {
    $.ajax({
        url: '/deleteExpense/' + expenseId,
        type: 'DELETE',  // Ensure you use DELETE here
        success: function(response) {
            alert('Expense deleted successfully!');
            window.location.reload(); // Reload to see the updated list
        },
        error: function(error) {
            alert('Error deleting expense: ' + error.responseText);
        }
    });
}
