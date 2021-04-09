'use strict'

class Bank { // eslint-disable-line no-unused-vars
  constructor () {
    this._account = null
  }

  newAccount (account = new Account()) {
    this._account = account
  }

  makeDeposit (amount) {
    this._account.deposit(amount)
  }

  makeWithdrawal (amount) {
    this._account.withdraw(amount)
  }

  getBalance () {
    return this._account.balance
  }

  printStatement () {
    return Printer.print(this._account.transactions)
  }
}
