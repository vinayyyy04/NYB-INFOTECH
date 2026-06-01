
for (let i = 1; i <= 5; i++) {
    console.log("For Loop:", i);
}

let count = 1;
while (count <= 5) {
    console.log("While Loop:", count);
    count++;
}

let num = 1;
do {
    console.log("Do-While Loop:", num);
    num++;
} while (num <= 5);

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}

let student = {
    name: "Vinay",
    age: 22,
    course: "JavaScript"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}

fruits.forEach(function (fruit, index) {
    console.log(index, fruit);
});


function greet() {
    console.log("Hello, Welcome to nyb!");
}

greet();

function add(a, b) {
    return a + b;
}

console.log("Sum =", add(10, 20));


function welcome(name = "Guest") {
    console.log("Welcome", name);
}

welcome();
welcome("Vinay");


const multiply1 = function (a, b) {
    return a * b;
};

console.log("Multiplication =", multiply1(5, 4));


const square = (n) => n * n;

console.log("Square =", square(6));


function total(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log("Total =", total(10, 20, 30, 40));


function showArguments() {
    console.log(arguments);
}

showArguments("JavaScript", 101, true);
