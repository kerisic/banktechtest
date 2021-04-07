# Bank Tech Test

### Introduction

This is a tech test with the functionality of a basic bank to assess object-oriented design and test-driven development skills. Information to aid planning and implementation can be found below through user stories and a sequence diagram. 

### Requirements

* The code can be interacted with via a REPL like IRB or the JavaScript console. (No need for CLI that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance Criteria

* Given a client makes a deposit of 1000 on 10-01-2012
* And a deposit of 2000 on 13-01-2012
* And a withdrawal of 500 on 14-01-2012
* When she prints her bank statement
* Then she would see

### How to Run

* Fork and clone this repo.
* Open SpecRunner.html in browser (Chrome or similar)
* Access developer tools through Inspect.
* Interact with code in console using commands in Examples below.

### Examples

```
bank = new Bank // create a new Bank instance
bank.newAccount() // set up a new bank account
bank.makeADeposit(100) // deposit 100.00 into your account
bank.makeAWithdrawal(50) // withdraw 50.00 from your account
bank.printStatement() // display transaction history of your account with most recent first

date || credit || debit || balance
07/04/2021 ||  || 50.00 || 50.00
07/04/2021 || 100.00 ||  || 100.00
```

### User Stories
```
As a client
So that I can use the services of the bank
I would like to set up a bank account

As a client
So that I can save money at the bank
I would like to make a deposit into my bank account

As a client
So that I can access my savings
I would like to be able to make withdrawals from my account

As a client
So that I can see my balance
I would like to print a bank statement that shows my balance

As a client
So that I can see the history of deposits and withdrawals
I would like the bank statement to show all dates of credits, debits and balance at the time.

As a client
So that I can view the most recent transaction
I would like the bank statement to be in reverse chronological order
```

### Sequence diagram

<img width="702" alt="Screenshot 2021-04-06 at 11 28 16" src="https://user-images.githubusercontent.com/71288920/113697550-3d8b5100-96cb-11eb-8881-9b2755e373c0.png">

### Approach

* OO design planned with requirements organised into user stories/features and sequence diagraming.
* TDD to guide code writing for each function using unit tests with Jasmine and feature testing in console.
* Bank class consists of functions that user interacts with so that the user only interacts with Bank.
* Functionality is extracted and performed by other classes including:
* Account: perform addition and deductions to balance while maintaining record of it
* Transaction: contain information of each deposit/withdrawal transaction to be kept in Account instance
* Printer: prints/returns bank statement in appropriate formatting using account instance's transactions.

### Challenges

* While I attempted to isolate unit tests, due to unfamiliarity with Jasmine's provision of spies, I was not sure how to write my tests with regards to dependency injection (or where best to position classes within Bank) etc. (I can however imagine what I'd need to do in Ruby's rspec)
* Due to time constraints, I decided to test the bank class with dependency on the other classes providing that it returned the appropriate value.
* I could not find an appropriate matcher or solution for testing console output, so I modified the printer function to also return the printed output for testing.
