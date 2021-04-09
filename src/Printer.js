class Printer {
  static print (transactions) {
    const formatted = Printer.format(transactions)
    for (let i = 0; i < formatted.length; i++) {
      console.log(formatted[i])
    }
  }

  static format (transactions) {
    const header = 'date || credit || debit || balance\n'
    const formatted = []
    formatted.push(header)
    for (let i = transactions.length - 1; i >= 0; i--) {
      const date = transactions[i].date.toLocaleDateString()
      let credit
      let debit
      const balance = transactions[i].balance.toFixed(2)
      transactions[i].credit === '' ? credit = '' : credit = transactions[i].credit.toFixed(2)
      transactions[i].debit === '' ? debit = '' : debit = transactions[i].debit.toFixed(2)
      formatted.push(`${date} || ${credit} || ${debit} || ${balance}\n`)
    }
    return formatted
  }
}
