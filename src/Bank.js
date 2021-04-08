'use strict';

class Bank {
  constructor() {
    this._account = null;
  }

  newAccount(account = new Account) {
    this._account = account;
  }

  makeADeposit(amount) {
    this._account.deposit(amount);
    return this.getBalance();
  }

  makeAWithdrawal(amount) {
    this._account.withdraw(amount);
    return this.getBalance();
  }

  getBalance() {
    return this._account.balance;
  }

  printStatement() {
    return Printer.print(this._account.transactions)
  }
}

