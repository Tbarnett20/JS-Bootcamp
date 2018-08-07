let myAccount = {
  name: 'Terrance Danckert',
  expenses: 0,
  income: 0
}
let otherAccount = myAccount
otherAccount.income= 1000
otherAccount= {}

let addIncome = function (account, amount) {
  account.income - account.income + amount
 }

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

let getAccountSummary = function () {
 return `Account for ${myAccount.name} has a balance of $${myAccount.income - myAccount.expenses}. Income: $${myAccount.income}, Expense: $${myAccount.expenses}`
} 

let resetAccount = function (account) {
account.income = 0
account.expenses = 0
}

let getNewAccountSummary = function () {
  return `Account for ${myAccount.name} has a balance of $${myAccount.income - myAccount.expenses}. Income: $${myAccount.income}, Expense: $${myAccount.expenses}`
 } 

 addIncome(myAccount, 1000)
 addExpense(myAccount, 100)
 addExpense(myAccount, 689)
 console.log(getAccountSummary())
 resetAccount(myAccount)
 console.log(getNewAccountSummary())

// addIncome

// resetAccount reset expenses/im=cnome to 0

// getAccountSummary
// Account for Terrance has balance of $$$. $$$$ is income and $$$ is exenses
