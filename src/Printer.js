class Printer {
  static print(transactions) {
    let header = 'date || credit || debit || balance'
    let log = [];
    log.push(header);
    console.log(header)
    let reverseOrder = transactions.reverse();
    
    if (transactions.length > 0) {
      for(let i = 0; i < reverseOrder.length; i++) {
        let date = reverseOrder[i].date;
        let credit = reverseOrder[i].credit;
        credit == "" ? "" : credit = credit.toFixed(2)
        let debit = reverseOrder[i].debit;
        debit == "" ? "" : debit = debit.toFixed(2)
        let balance = reverseOrder[i].balance.toFixed(2);
        log.push(`${date} || ${credit} || ${debit} || ${balance}\n`)
        console.log(`${date} || ${credit} || ${debit} || ${balance}`)
      }
    }

    return log // log for testing purposes mainly
  }
}