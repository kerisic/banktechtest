'use strict';

var Account = require('./Account');

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
}
module.exports = Bank;
