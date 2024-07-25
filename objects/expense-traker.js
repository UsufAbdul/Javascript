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
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};
//addExpense(myAccount, 20);
//console.log(myAccount);

let addIncome = function (account, income) {
  account.income = account.income + income;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in Expenses`;
};
addIncome(myAccount, 30);
addExpense(myAccount, 2);
addExpense(myAccount, 5);
getAccountSummary(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
