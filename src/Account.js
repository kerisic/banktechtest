'use strict';

class Account {
  constructor(transactionClass = Transaction) {
    this._balance = 0;
    this._transactionClass = transactionClass;
    this._transactions = [];
  }
 
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }

  deposit(amount, date = new Date().toLocaleDateString()) {
    this._balance += amount;
    let transaction = new this._transactionClass(date, amount.toFixed(2), "", this.balance.toFixed(2));
    this._transactions.push(transaction);
  }

  withdraw(amount, date = new Date().toLocaleDateString()) {
    this._balance -= amount;
    let transaction = new this._transactionClass(date, "" , amount.toFixed(2), this.balance.toFixed(2));
    this._transactions.push(transaction);
  }
}
