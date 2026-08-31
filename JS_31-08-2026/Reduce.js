let prices = [100, 200, 300, 400];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);



let numbers = [10,20,39,86]

let normalnumbers = numbers.map((num) => num * 2);

console.log(numbers)

console.log("after using the map method" , normalnumbers);