//addExpense
// addIncome (acc)

//resetAccount (acc): reset the expenses of an acc to 0

// getAccountSummary: summary of the acc (accBalance, totalExpense, totalIncome)
//Account for andrew has $900. $1000 in income. $100 in expense.
// flow: addIncome - addExpenses - addExpenses - getAccountSummary - resetAccount -getAccountSummary

let myAccount = {
  name: "Yusuf Abdulkadir",
  expenses: 0,
  income: 0,

  addExpense: function (account, amount) {
    this.expenses = this.expenses + amount;
  },

  addIncome: function (account, income) {
    this.income = this.income + income;
  },

  resetAccount: function (account) {
    this.expenses = 0;
    this.income = 0;
  },

  getAccountSummary: function (account) {
    let balance = this.income - this.expenses;
    return `Account for ${this.name} has $${balance}. $${this.income} in income. $${this.expenses} in expense`;
  },
};

myAccount.addIncome(myAccount, 500);
myAccount.addExpense(myAccount, 100);
myAccount.addExpense(myAccount, 150);
console.log(myAccount.getAccountSummary(myAccount));
myAccount.resetAccount(myAccount);
console.log(myAccount.getAccountSummary(myAccount));
