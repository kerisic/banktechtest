class Printer {
  static print(transactions) {
    let header = 'date || credit || debit || balance'
    let log = [];
    log.push(header);
    console.log(header)

    for(let i = 0; i < transactions.length; i++) {
      let date = transactions[i].date;
      let credit = transactions[i].credit;
      let debit = transactions[i].debit;
      let balance = transactions[i].balance;
      log.push(`${date} || ${credit} || ${debit} || ${balance}\n`)
      console.log(`${date} || ${credit} || ${debit} || ${balance}`)
    }
    
    return log // log for testing purposes mainly
  }
}