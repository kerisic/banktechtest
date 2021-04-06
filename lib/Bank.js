'use strict';

var Account = require('../lib/Account');

class Bank {
  constructor(account = Account) {
    this.account = account;
  }

  newAccount() {
    this.account = new this.account();
  }
}

module.exports = Bank;