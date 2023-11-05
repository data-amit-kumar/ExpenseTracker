let expenses = JSON.parse(localStorage.getItem('expenses')) ;

        function exp() {
            const expenseList = document.getElementById('expenseList');
            expenseList.innerHTML = '';
            expenses.forEach((expense, index) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${expense.name} - ${expense.amount}</span>
                    <button onclick="editExpense(${index})">Edit</button>
                    <button onclick="deleteExpense(${index})">Delete</button>
                `;
                expenseList.appendChild(li);
            });
        }
        function addExpense() {
            const expenseName = document.getElementById('expenseName').value;
            const expenseAmount = document.getElementById('expenseAmount').value;

            expenses.push({ name: expenseName, amount: expenseAmount });
            localStorage.setItem('expenses', JSON.stringify(expenses));
            exp();
        }

        function editExpense(index) {
            const newName = prompt('Enter new expense name:');
            const newAmount = prompt('Enter new expense amount:');
            expenses[index] = { name: newName, amount: newAmount };
            localStorage.setItem('expenses', JSON.stringify(expenses));
            exp();
        }
        function deleteExpense(index) {
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            exp();
        }

        exp();