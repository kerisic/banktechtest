const Account = require('../lib/Account');

describe('Bank', function() {
  var bank;
  var Bank = require('../lib/Bank');
  
  beforeEach(function() {
    bank = new Bank;
    bank.newAccount();
  });
    
  it('should instantiate a new Bank instance', () => {   
    expect(bank).toBeInstanceOf(Bank);
  });

  describe('newAccount', function() {
    it('creates a new account', () => {
      expect(bank.account).toBeInstanceOf(Account);
    });    
  });
  
  describe('makeADeposit', function() {
    it('instructs account to deposit an amount and balance increases by that amount', () => {
      bank.makeADeposit(20);
      expect(bank.getBalance()).toEqual(20);
    });
  });
});
  