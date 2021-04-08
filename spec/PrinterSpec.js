describe('Printer', function() {
  
  describe('takes in an array of objects and returns it in the appropriate format', function() {
    it('has a header', () => {
      date = new Date();
      let array = [{date: date, credit: "", debit: 200, balance: 400}]
      expect(Printer.print(array)[0]).toEqual("date || credit || debit || balance");
    });

    it('formats the transaction object in the appropriate format', () => {
      date = new Date();
      let array = [{date: date, credit: "", debit: 200, balance: 400}]
      expect(Printer.print(array)[1]).toEqual("07/04/2021 ||  || 200.00 || 400.00\n");
    });

    it('displays the transaction objects in reverse order relative to position in array passed as argument', () => {
      date = new Date();
      let array= [{date: date, credit: "", debit: 200, balance: 400}, {date: date, credit: "", debit: 200, balance: 400}];
      expect(Printer.print(array)[1]).toEqual("08/04/2021 ||  || 200.00 || 400.00\n");
    })
  });
    
});
  