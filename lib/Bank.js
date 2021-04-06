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

  printStatement() {
    let log = [];
    console.log('date || credit || debit || balance')
    for(let i = 0; i < this.account.transactions.length; i++) {
      let date = this.account.transactions[i].date;
      let credit = this.account.transactions[i].credit;
      let debit = this.account.transactions[i].debit;
      let balance = this.account.transactions[i].balance;
      log.push(`${date} || ${credit} || ${debit} || ${balance}\n`)
      console.log(`${date} || ${credit} || ${debit} || ${balance}`)
    }
    return log;
  }
}
module.exports = Bank;
