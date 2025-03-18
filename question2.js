// Exploring Objects and Math in JS

// Task 1, Create a constructor function for the account object with properties for accountNumber, balance and owner
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: Method to deposit funds
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Deposit amount must be greater than zero.");
    }
};

// Task 2: Method to withdraw funds
Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
};

// Task 3: Method to calculate compound interest
Account.prototype.calculateInterest = function(rate, years) {
    if (rate < 0 || years < 0) {
        console.log("Interest rate and years must be non-negative.");
        return;
    }
    let interest = this.balance * Math.pow(1 + rate / 100, years);
    console.log(`Balance after ${years} years at ${rate}% interest: $${interest.toFixed(2)}`);
    return interest;
};

// Testing
let account1 = new Account(9001, 650, "Emily");

console.log(`Account Owner: ${account1.owner}, Account Number: ${account1.accountNumber}, Balance: $${account1.balance}`);

account1.deposit(200); 
account1.withdraw(100); 
account1.calculateInterest(3.5, 3); 
