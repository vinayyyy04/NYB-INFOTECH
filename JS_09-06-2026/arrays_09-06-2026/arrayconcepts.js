//some()--checks if atleast one element satisfes the condition

let employees = [
    {name: "vinay",salary:15000},
    {name: "yashwanth",salary:20000},
    {name: "sowmith",salary:10000}
];

console.log(employees.some(emp => emp.salary > 4000));
console.log(employees.some(emp => emp.salary > 40000));

//every()--checks if all elements satisfy the condition 

console.log(employees.every(employee => employee.salaried));


//Array iterarion

let fruits = ["apple","mango","banana"];

//for..of loop --iterates directly over array element

for (let i = 0;i < fruits.length;i++){
    console.log(fruits[i]);
}

//for each--executes a function for each array element

fruits.forEach(fruit => console.log(fruit));


//join()--converts array elements into strings

let cars = ["thar roxx"," xuv 3x0","bolero","xuv 7xo"];

console.log(cars.join());
console.log(cars.join("-"));
console.log(cars.join("|"));
console.log(cars.join("-->"))

//sort()for strings--sort strings alphabetically

cars.sort();
console.log(cars);

//sort() with numbers

let numbers = [18,45,7,88,100];

numbers.sort((a,b) => a - b);
console.log(numbers);

numbers.sort((a,b) => b - a);
console.log(numbers);

// flat() - Flattens nested arrays into a single array.

let nestedArray = [1, 2,3,4 [1,2,3], [1, 2]];
console.log(nestedArray.flat());


// concat() - Flattens arrays by combining multiple arrays.

let  arr1 = [1, 2];
let  arr2 = [3, 4];
let  arr3 = [5, 6];
console.log([].concat(arr1, arr2, arr3));

// Set - Removes duplicate elements from an array.

let numberss = [1, 2, 3, 2, 4, 1, 5];
console.log([...new Set(numberss)]);


//indexOf() - Finds the first occurrence of an element.

let fruitss = ["Apple", "Mango", "Orange", "Mango"];
console.log(fruits.indexOf("Mango"));


//lastIndexOf()--Finds the last occurrence of an element.

console.log(fruitss.lastIndexOf("Mango"));


//map()--Transforms each element and returns a new array.

let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);


// filter() - Returns elements that satisfy a condition.

let marks = [35, 50, 75, 20, 90];
let passedMarks = marks.filter(mark => mark >= 50);
console.log(passedMarks);


// reduce() - Reduces array elements to a single value.

let salaries = [15000, 20000, 4000];
let totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
console.log(totalSalary);


//built-in sort method--descending

let values = [20,50,40,10,30];

for (let i= 0; i < values.length -1;i++) {
    for (let i= 0; i > values.length -1;i++) {
        if (values[j] < values[j + 1]) {
        let temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;
    }
}
}
console.log(values);

//examples for forEach()--calculate total sum

let markss = [ 50,60,70,80,20,35];
let total = 0;

marks.forEach(function(mark){
    total += mark;
});
console.log(total);

//comparison  of filter map reduce

let orders = [
    {item:"laptop",price:50000,delivered:true},
    {item:"laptop",price:50000,delivered:true},
    {item:"laptop",price:50000,delivered:true},
];

//map()
let itemsNames = orders.map(order => order.item);
console.log(itemsNames);

//filter()

let deliveredOrders = orders.filter(
    order => order.delivered
);

console.log(deliveredOrders);

//reduce()

let totalAmount = orders.reduce(
    (total,order) => total + order.price,
    0
);

console.log(totalAmount);


