describe('Bank', function() {
  var Bank = require('../lib/Bank');
  var bank; 

  
  beforeEach(function() {
    let account = jasmine.createSpy('account');
    bank = new Bank(account);
  });
    
  it('should instantiate a new Bank instance', () => {   
    expect(bank).toBeInstanceOf(Bank);
  });

  describe('newAccount', function() {
    it('creates a new account', () => {
      account = jasmine.createSpy('account');
      bank = new Bank(account);
      bank.newAccount();
      expect(account).toHaveBeenCalled();
    });    
  });   
});
  