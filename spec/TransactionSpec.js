
describe('Transaction', function() {
  var Transaction = require('../lib/Transaction');
  
  it('should have a type and amount upon instantiation', () => {
    transaction = new Transaction('14/01/2012', 0, 100, 1000)
    expect(transaction.date).toEqual('14/01/2012');
    expect(transaction.debit).toEqual(100);
    expect(transaction.balance).toEqual(1000);
  });
    
});
  