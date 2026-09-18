class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`₹${amount} deposited.`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`₹${amount} withdrawn.`);
        }
    }

    showBalance() {
        console.log(`${this.accountHolder}'s Balance: ₹${this.balance}`);
    }
}

// Creating objects
const account1 = new BankAccount("Rahul", 10000);
const account2 = new BankAccount("Priya", 15000);

// Using object methods
account1.deposit(2000);
account1.withdraw(3000);
account1.showBalance();

console.log("----------------");

account2.deposit(5000);
account2.withdraw(4000);
account2.showBalance();