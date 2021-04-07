describe('Printer', function() {
  
  describe('takes in an array of objects and returns it in the appropriate format', function() {
    it('has a header', () => {
      let array = [{date: "07/04/2021", credit: "", debit: "200.00", balance: "400.00"}]
      expect(Printer.print(array)[0]).toEqual("date || credit || debit || balance");
    });

    it('formats the transaction object in the appropriate format', () => {
      let array = [{date: "07/04/2021", credit: "", debit: "200.00", balance: "400.00"}]
      expect(Printer.print(array)[1]).toEqual("07/04/2021 ||  || 200.00 || 400.00\n");
    });
  });
    
});
  