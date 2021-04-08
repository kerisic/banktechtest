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
  }

  makeAWithdrawal(amount) {
    this._account.withdraw(amount);
  }
  
  printStatement() {
    return Printer.print(this._account.transactions)
  }
}

