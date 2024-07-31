// Initialize user object
let user = JSON.parse(localStorage.getItem('user')) || {
  name: 'Guest', // Default value, can be set dynamically
  email: '',
  password: '',
  income: 0,
  expense: 0,
  incomeArray: [],
  expenseArray: []
};

// Global variable to store the chart instance
let pieChart;

window.addEventListener("DOMContentLoaded", () => {
  if (user && user.name) {
    document.getElementById('uname').textContent = `Welcome, ${user.name}`;
    document.getElementById('bal').textContent = user.income - user.expense;
    document.getElementById('spent').textContent = user.expense;
  }
  updateTable();
  initializeChart();
});

function updateDisplay() {
  document.getElementById('bal').textContent = user.income - user.expense;
  document.getElementById('spent').textContent = user.expense;
  updateChart(); // Update the chart data
}

function addIncome() {
  const incomeType = document.getElementById('income').value;
  const incomeAmount = parseFloat(document.getElementById('incomeAm').value);
  const currentTime = new Date().toLocaleString();

  if (incomeType && !isNaN(incomeAmount) && incomeAmount > 0) {
    user.incomeArray.push({ type: incomeType, amount: incomeAmount, time: currentTime });
    user.income += incomeAmount;

    localStorage.setItem('user', JSON.stringify(user));
    
    updateDisplay();
    updateTable();

    document.getElementById('income').value = '';
    document.getElementById('incomeAm').value = '';
  } else {
    alert('Please enter a valid income type and amount');
  }
}

function addExpense() {
  const expenseType = document.getElementById('expense').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAm').value);
  const currentTime = new Date().toLocaleString();

  if (expenseType && !isNaN(expenseAmount) && expenseAmount > 0) {
    if (expenseAmount > user.income - user.expense) {
      alert("You don't have sufficient balance");
      return;
    }
    user.expenseArray.push({ type: expenseType, amount: expenseAmount, time: currentTime });
    user.expense += expenseAmount;

    localStorage.setItem('user', JSON.stringify(user));

    updateDisplay();
    updateTable();

    document.getElementById('expense').value = '';
    document.getElementById('expenseAm').value = '';
  } else {
    alert('Please enter a valid expense type and amount');
  }
}

function updateTable() {
  const tableBody = document.getElementById('detailsTableBody');
  tableBody.innerHTML = '';

  user.incomeArray.forEach(entry => {
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${entry.type}</td><td>${entry.amount}</td><td>${entry.time}</td><td>Income</td>`;
  });

  user.expenseArray.forEach(entry => {
    const row = tableBody.insertRow();
    row.innerHTML = `<td>${entry.type}</td><td>${entry.amount}</td><td>${entry.time}</td><td>Expense</td>`;
  });
}

function initializeChart() {
  const ctx = document.getElementById('pieChart').getContext('2d');
  pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Income', 'Expense'],
      datasets: [{
        data: [user.income, user.expense],
        backgroundColor: ['#36A2EB', '#FF6384']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || '';
              const value = context.raw || 0;
              return `${label}: ${value}`;
            }
          }
        }
      }
    }
  });
}

function updateChart() {
  if (pieChart) {
    pieChart.data.datasets[0].data = [user.income, user.expense];
    pieChart.update(); // Update the chart with new data
  }
}

function clearAll() {
  alert("Are You sure")
  user.income = 0;
  user.expense = 0;
  user.incomeArray = [];
  user.expenseArray = [];

  localStorage.setItem('user', JSON.stringify(user));

  updateDisplay();
  updateTable();
}
// Initialize display
updateDisplay();
updateTable();

function logout(){
  window.location.href="index.html"
}