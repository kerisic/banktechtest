class Printer {
  static print(transactions) {
    let header = 'date || credit || debit || balance'
    let log = [];
    log.push(header);
    console.log(header)
    let reverseOrder = transactions.reverse();

    for(let i = 0; i < reverseOrder.length; i++) {
      let date = reverseOrder[i].date;
      let credit = reverseOrder[i].credit;
      let debit = reverseOrder[i].debit;
      let balance = reverseOrder[i].balance;
      log.push(`${date} || ${credit} || ${debit} || ${balance}\n`)
      console.log(`${date} || ${credit} || ${debit} || ${balance}`)
    }

    return log // log for testing purposes mainly
  }
}