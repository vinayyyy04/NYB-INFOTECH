//closure-based programs

//1:-simple closure--remember the message variable even after outer().has done

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const result = outer();
result();

//counter using closure---variable count is preserved between function calls

function Counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const increment = Counter();

console.log(increment());
console.log(increment());
console.log(increment());


//example--private bank account

function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            console.log("Balance:", balance);
        },

        withdraw(amount) {
            balance -= amount;
            console.log("Balance:", balance);
        }
    };
}

const account = bankAccount();

account.deposit(500);
account.withdraw(200);
