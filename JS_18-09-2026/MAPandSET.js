// Real-world example: Shopping Cart

const cart = new Map();

// Add products to cart
cart.set("Laptop", 1);
cart.set("Mouse", 2);
cart.set("Keyboard", 1);

// Update quantity
cart.set("Mouse", 3);

console.log("Cart:", cart);

// Get product quantity
console.log("Mouse quantity:", cart.get("Mouse"));

// Check whether product exists
console.log("Has Laptop:", cart.has("Laptop"));

// Remove a product
cart.delete("Keyboard");

console.log("Updated Cart:", cart);


// Set example: Store unique product categories

const categories = new Set();

categories.add("Electronics");
categories.add("Accessories");
categories.add("Electronics"); // Duplicate ignored
categories.add("Laptops");
categories.add("Accessories"); // Duplicate ignored

console.log("Unique Categories:", categories);

// Check category
console.log("Has Electronics:", categories.has("Electronics"));

// Remove category
categories.delete("Laptops");

console.log("Updated Categories:", categories);

// Loop through Set
categories.forEach(category => {
    console.log("Category:", category);
});