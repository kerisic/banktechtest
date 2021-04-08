'use strict';

class Account {
  constructor(transactionClass = Transaction) {
    this._balance = 0;
    this._transactionClass = transactionClass;
    this._transactions = [];
    this._date;
  }
 
  get balance() {
    return this._balance;
  }

  get transactions() {
    return this._transactions;
  }

  deposit(amount) {
    this._balance += amount;
    this._date = new Date();
    let transaction = new this._transactionClass(this._date, amount, "", this.balance);
    this._transactions.push(transaction);
  }

  withdraw(amount) {
    this._balance -= amount;
    this._date = new Date()
    let transaction = new this._transactionClass(this._date, "" , amount, this.balance);
    this._transactions.push(transaction);
  }
}
