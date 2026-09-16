let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, inStock: true },
    { id: 2, name: "Mouse", category: "Electronics", price: 1000, inStock: true },
    { id: 3, name: "Keyboard", category: "Electronics", price: 2000, inStock: false },
    { id: 4, name: "Chair", category: "Furniture", price: 5000, inStock: true }
];

// 1. Filter products that are in stock
let availableProducts = products.filter(product => product.inStock);


// 2. Get only product names
let productNames = availableProducts.map(product => product.name);


// 3. Calculate total price
let totalPrice = availableProducts.reduce(
    (total, product) => total + product.price,
    0
);


// 4. Find a specific product
let laptop = products.find(product => product.name === "Laptop");


// 5. Check if any product costs more than 50,000
let expensiveProduct = products.some(product => product.price > 50000);


// 6. Get all product categories
let categories = [...new Set(products.map(product => product.category))];


// 7. Sort products by price
let sortedProducts = [...products].sort((a, b) => a.price - b.price);


// 8. Convert product into key-value pairs
let laptopDetails = Object.entries(laptop);


// Display results
console.log("Available Products:", availableProducts);
console.log("Product Names:", productNames);
console.log("Total Price:", totalPrice);
console.log("Laptop:", laptop);
console.log("Has Expensive Product:", expensiveProduct);
console.log("Categories:", categories);
console.log("Sorted Products:", sortedProducts);
console.log("Laptop Details:", laptopDetails);
