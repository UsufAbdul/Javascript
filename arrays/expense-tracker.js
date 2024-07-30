const account = {
  name: "Yusuf Abdulkadir",
  expenses: [],
  income: [],

  addExpense: function (description, amount) {
    return this.expenses.push({
      description: description,
      amount: amount,
    });
  },

  addIncome: function (description, amount) {
    return this.income.push({
      description: description,
      amount: amount,
    });
  },

  getAccountSummary: function (account) {
    let totalExpense = 0;
    let totalIncome = 0;
    let totalBalance = 0;
    this.expenses.forEach(function (expense) {
      totalExpense = totalExpense + expense.amount;
    });
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount;
    });

    totalBalance = totalIncome - totalExpense;

    return `${this.name} has a balance of $${totalBalance}, $${totalIncome} in income,$${totalExpense} in expense`;
  },
};
account.addExpense("Bakery", 950);
account.addExpense("Shopping", 12);
account.addIncome("Job", 1000);
console.log(account.getAccountSummary());
