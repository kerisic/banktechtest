describe('Account', function() {
  var Account = require('../lib/Account');
  var account;

  beforeEach(() => {
		account = new Account;
	});
    
  it('should instantiate a new account', () => {   
    expect(account).toBeInstanceOf(Account);
  });

  it('should start with a balance of zero', () => {
    expect(account.balance).toEqual(0);
  });
});
  