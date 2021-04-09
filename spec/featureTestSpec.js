describe('feature test', function () {
  beforeEach(function () {
    bank = new Bank()
    bank.newAccount()
  })

  it('allows an user to sign up for a new bank account, deposit money and balance is saved', () => {
    bank.makeDeposit(100)
    expect(bank.getBalance()).toEqual(100)
  })

  it('allows an user to withdraw money from their account and balance is deducted', () => {
    bank.makeDeposit(100)
    bank.makeWithdrawal(60)
    expect(bank.getBalance()).toEqual(40)
  })

  it('allows an user to print their bank statement', () => {
    spyOn(console, 'log')
    const basedate = new Date()
    jasmine.clock().mockDate(basedate)
    bank.makeDeposit(50)
    bank.printStatement()
    expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n')
    expect(console.log).toHaveBeenCalledWith(`${basedate.toLocaleDateString()} || 50.00 ||  || 50.00\n`)
  })
})
