class Printer {
  static print(transactions) {
    let formatted = Printer.format(transactions);
    for(let i = 0; i < formatted.length; i++) {
      console.log(formatted[i]);
    }
  }

  static format(transactions) {
    let header = 'date || credit || debit || balance\n'
    let formatted = [];
    formatted.push(header);
    for(let i = transactions.length - 1; i >= 0; i--) {
        let date = transactions[i].date.toLocaleDateString();
        let credit;
        let debit;
        let balance = transactions[i].balance.toFixed(2);
        transactions[i].credit == "" ? credit = "" : credit = transactions[i].credit.toFixed(2)
        transactions[i].debit == "" ? debit = "" : debit = transactions[i].debit.toFixed(2)
        formatted.push(`${date} || ${credit} || ${debit} || ${balance}\n`)
    }
    return formatted;
  }
}