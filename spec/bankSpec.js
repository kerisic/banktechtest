describe('Bank', function() {
  var Bank = require('../lib/Bank');
  var bank; 

  beforeEach(() => {
		bank = new Bank;
	});
    
  it('should instantiate a new Bank instance', () => {   
    expect(bank).toBeInstanceOf(Bank);
  });
  
});
  