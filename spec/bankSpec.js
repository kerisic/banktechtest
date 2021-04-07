describe('Bank', function() {
  var bank
  
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
      //how to test passing a spy object of account and instantiation is called on it?
    });    
  });
  
  describe('makeADeposit', function() {
    it('instructs account to deposit an amount', () => {
      bank.makeADeposit(20);
      expect(bank.getBalance()).toEqual(20);
      //how to test dependency injection of account spy object and deposit is called on it?
    });
  });

  
  describe('makeAWithdrawal', function() {
    it('instructs account to withdraw an amount', () => {
      bank.makeADeposit(40);
      bank.makeAWithdrawal(20);
      expect(bank.getBalance()).toEqual(20);
      //how to test having an account spy object and withdraw is called on it
    });
  });

  
  describe('printStatement', function() {
    it('should have details of a deposit in the statement when a deposit was made in the past', () => {
      bank.makeADeposit(40);
      let date = new Date().toLocaleDateString()
      expect(bank.printStatement()).toContain(`${date} ||  || 40.00 || 40.00\n`)
    // how to test console output?
    });
  });
    
});
  