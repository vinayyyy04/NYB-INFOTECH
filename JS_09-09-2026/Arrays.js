// ==========================================
// 1. CREATING AND ACCESSING AN ARRAY
// ==========================================

let prices = [499, 799, 299, 999, 599];

console.log("All prices:", prices);
console.log("First price:", prices[0]);
console.log("Third price:", prices[2]);
console.log("Number of products:", prices.length);


// ==========================================
// 2. ADDING AND REMOVING ELEMENTS
// ==========================================

// Add a new product price
prices.push(1299);

// Remove the last product
prices.pop();

// Add a product at the beginning
prices.unshift(399);

// Remove the first product
prices.shift();

console.log("Updated prices:", prices);


// ==========================================
// 3. SEARCHING ELEMENTS
// ==========================================

console.log("Is ₹799 in the cart?", prices.includes(799));

console.log("Position of ₹999:", prices.indexOf(999));


// ==========================================
// 4. LOOPING THROUGH AN ARRAY
// ==========================================

// Using for loop
for (let i = 0; i < prices.length; i++) {
    console.log("Product price:", prices[i]);
}

// Using for...of
for (let price of prices) {
    console.log("Price:", price);
}


// ==========================================
// 5. map()
// ==========================================

// Apply a 10% discount to every product
let discountedPrices = prices.map((price) => {
    return price * 0.90;
});

console.log("Discounted prices:", discountedPrices);


// ==========================================
// 6. filter()
// ==========================================

// Get products costing ₹700 or more
let expensiveProducts = prices.filter((price) => {
    return price >= 700;
});

console.log("Expensive products:", expensiveProducts);


// ==========================================
// 7. reduce()
// ==========================================

// Calculate total cart value
let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log("Total cart value:", total);


// ==========================================
// 8. find()
// ==========================================

// Find the first product costing more than ₹800
let product = prices.find((price) => {
    return price > 800;
});

console.log("First product above ₹800:", product);


// ==========================================
// 9. findIndex()
// ==========================================

// Find the position of the first product above ₹800
let productIndex = prices.findIndex((price) => {
    return price > 800;
});

console.log("Index:", productIndex);


// ==========================================
// 10. some()
// ==========================================

// Check if at least one product costs ₹1000 or more
let hasExpensiveProduct = prices.some((price) => {
    return price >= 1000;
});

console.log("Has ₹1000+ product?", hasExpensiveProduct);


// ==========================================
// 11. every()
// ==========================================

// Check whether all products cost more than ₹200
let allAbove200 = prices.every((price) => {
    return price > 200;
});

console.log("Are all products above ₹200?", allAbove200);


// ==========================================
// 12. forEach()
// ==========================================

// Display each product price
prices.forEach((price, index) => {
    console.log(`Product ${index + 1}: ₹${price}`);
});


// ==========================================
// 13. sort()
// ==========================================

// Sort prices from lowest to highest
let lowToHigh = [...prices].sort((a, b) => {
    return a - b;
});

console.log("Low to high:", lowToHigh);


// Sort prices from highest to lowest
let highToLow = [...prices].sort((a, b) => {
    return b - a;
});

console.log("High to low:", highToLow);


// ==========================================
// 14. join()
// ==========================================

let priceList = prices.join(" | ");

console.log("Price list:", priceList);


// ==========================================
// 15. FLATTENING ARRAYS
// ==========================================

// Products divided into categories
let products = [
    ["Laptop", "Mouse"],
    ["Keyboard", "Monitor"],
    ["Headphones", "Webcam"]
];

let allProducts = products.flat();

console.log("All products:", allProducts);


// ==========================================
// 16. REMOVING DUPLICATES
// ==========================================

let productPrices = [
    499,
    799,
    499,
    999,
    799,
    299,
    999
];

let uniquePrices = [...new Set(productPrices)];

console.log("Unique prices:", uniquePrices);