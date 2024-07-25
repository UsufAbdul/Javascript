let myAccount = {
  name: "Yusuf Abdulkadir",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  //console.log(account); // account here refrences the thing passed to it at the end and it makes changes to it also
};

addExpense(myAccount, 2.5); // the parameter Account is now account so it afffects the object MyAccount
console.log(myAccount);

// addIncome (acc,amount)

//resetAccount (acc): reset the expenses of an acc to 0

// getAccountSummary: summary of the acc (accBalance, totalExpense, totalIncome)
//Account for andrew has $900. $1000 in income. $100 in expense.
// flow: addIncome - addExpenses - addExpenses - getAccountSummary - resetAccount -getAccountSummary

`let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
};`;

let addIncome = function (account, income) {
  account.income = account.income + amount;
};

let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
};

let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expense`;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(getAccountSummary(myAccount));
