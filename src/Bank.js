'use strict';

class Bank {
  constructor() {;
    this.account = null;
  }

  newAccount(account = new Account) {
    this.account = account;
  }

  makeADeposit(amount) {
    this.account.deposit(amount);
  }

  makeAWithdrawal(amount) {
    this.account.withdraw(amount);
  }

  getBalance() {
    return this.account.balance;
  }

  printStatement() {
    return Printer.print(this.account.transactions)
  }
}

