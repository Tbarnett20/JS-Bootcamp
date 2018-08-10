const account = {
  name: 'Terrance Danckert',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description: description,
      amount: amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description: description,
      amount: amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })
    let totalIncome = 0
    this.income.forEach(function (pay) {
      totalIncome = totalIncome + pay.amount
    })
    return `${this.name} has a balance $${totalIncome - totalExpenses} in expenses. With income being $${totalIncome} and expenses being $${totalExpenses}`
  },
}

// account.addExpense('Down Payment', 1500)
account.addExpense('Internet', 120)
account.addExpense('Bills', 500)
account.addExpense('Valet Trash', 40)
account.addExpense('Rent', 1500)
account.addExpense('Insurance', 500)
account.addIncome('Google', 3000)

console.log(account.getAccountSummary())

