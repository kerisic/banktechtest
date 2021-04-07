describe('Account', function() {
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

  describe('deposit()', function() {
    it('should add funds into the account and increase the balance by the amount', () => {
      let amount = 200;
      expect(account.balance).toEqual(0)
      account.deposit(amount);
      expect(account.balance).toEqual(amount);
    });

    it('should ensure balance increases by right amount when balance is not zero', () => {
      let amount = 200;
      account.deposit(amount);
      account.deposit(amount);
      expect(account.balance).toEqual(400);
    });
  });
  
  describe('withdraw()', function() {
    it('should take out funds from the account and decrease the balance by the amount', () => {
      account.deposit(400);
      account.withdraw(200);
      expect(account.balance).toEqual(200);
    });
  });

  
  describe('it has a history of transactions', function() {
    it('should as a new account have an empty array for its transactions log', () => {
      expect(account.transactions).toEqual([]);
    });

    it('records a deposit in its transactions', () => {
      account.deposit(200);
      expect(account.transactions.length).toEqual(1);
    });

    it('records a withdrawal in its transactions', () => {
      account.deposit(200);
      account.withdraw(100);
      expect(account.transactions.length).toEqual(2);
    });

    it('records the date of the transaction', () => {
      account.deposit(200, '14/01/2012')
      expect(account.transactions[0].date).toEqual('14/01/2012')
    })
  });
    
});
  