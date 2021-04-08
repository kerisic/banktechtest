describe('Bank', function() {
  var bank
  
  beforeEach(function() {
    bank = new Bank;
    account = jasmine.createSpyObj('account', ['deposit', 'withdraw'])
    bank.newAccount(account);
  });
    
  it('should instantiate a new Bank instance', () => {   
    expect(bank).toBeInstanceOf(Bank);
  });
  
  describe('makeDeposit', function() {
    it('instructs account to deposit an amount', () => {
      bank.makeDeposit(20);
      expect(account.deposit).toHaveBeenCalledWith(20);
    });
  });
  
  describe('makeWithdrawal', function() {
    it('instructs account to withdraw an amount', () => {
      bank.makeDeposit(40);
      bank.makeWithdrawal(20);
      expect(account.withdraw).toHaveBeenCalledWith(20);
    });
  });

  
  describe('printStatement', function() {
    it('should instruct a bank statement to be printed', () => {
      bank.makeDeposit(40);
      spyOn(Printer, 'print')
      bank.printStatement();
      expect(Printer.print).toHaveBeenCalled();
    });
  });
    
});
  