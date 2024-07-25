let myAccount = {
  name: "Yusuf Abdulkadir",
  expenses: 0,
  income: 0,
};

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
  console.log(account); // account here refrences the thing passed to it at the end and it makes changes to it also
};

addExpense(myAccount, 2.5); // the parameter Account is now account so it afffects the object MyAccount
console.log(myAccount);
