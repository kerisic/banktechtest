'use strict'

class Account { // eslint-disable-line no-unused-vars
  constructor (transactionClass = Transaction) {
    this._balance = 0
    this._transactionClass = transactionClass
    this._transactions = []
    this._date = null
  }

  get balance () {
    return this._balance
  }

  get transactions () {
    return this._transactions
  }

  deposit (amount) {
    this._balance += amount
    this._date = new Date()
    const transaction = new this._transactionClass(this._date, amount, '', this.balance)
    this._transactions.push(transaction)
  }

  withdraw (amount) {
    this._balance -= amount
    this._date = new Date()
    const transaction = new this._transactionClass(this._date, '', amount, this.balance)
    this._transactions.push(transaction)
  }
}
