
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            }

            return "Insufficient balance";
        }
    };
}

const account = createBankAccount(1000);

console.log(account.deposit(500));  // 1500
console.log(account.withdraw(300)); // 1200

