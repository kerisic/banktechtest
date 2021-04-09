/* eslint-disable no-global-assign */
describe('Printer', function () {
  describe('print', function () {
    it('outputs to the console', () => {
      spyOn(console, 'log')
      date = new Date()
      const array = [{ date: date, credit: '', debit: 200, balance: 400 }]
      Printer.print(array)
      expect(console.log).toHaveBeenCalledWith('date || credit || debit || balance\n')
      expect(console.log).toHaveBeenCalledWith(`${date.toLocaleDateString()} ||  || 200.00 || 400.00\n`)
    })
  })

  describe('Printer.format turns a transactions array into the appropriate format', function () {
    it('has a header', () => {
      date = new Date()
      const array = [{ date: date, credit: '', debit: 200, balance: 400 }]
      expect(Printer.format(array)[0]).toEqual('date || credit || debit || balance\n')
    })

    it('formats the transaction amount to two decimal places and the appropriate date format', () => {
      date = new Date()
      const array = [{ date: date, credit: '', debit: 200, balance: 400 }]
      expect(Printer.format(array)[1]).toEqual(`${date.toLocaleDateString()} ||  || 200.00 || 400.00\n`)
    })

    it('displays the transaction objects in reverse order relative to position in array passed as argument', () => {
      date = new Date()
      const array = [{ date: date, credit: '', debit: 200, balance: 400 }, { date: date, credit: '', debit: 100, balance: 300 }]
      expect(Printer.format(array)[1]).toEqual(`${date.toLocaleDateString()} ||  || 100.00 || 300.00\n`)
      expect(Printer.format(array)[2]).toEqual(`${date.toLocaleDateString()} ||  || 200.00 || 400.00\n`)
    })
  })
})
/* eslint-disable no-global-assign */
