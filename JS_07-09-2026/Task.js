// Shopping Bill Calculator


// Variables and Data Types

let customerName = "Vinay";     
let product = "Headphones";       

let price = 15000;                 
let quantity = 2;                 

let isMember = true;              


// Operators


// Multiplication operator
let subtotal = price * quantity;


// Ternary operator
let discount = isMember
    ? subtotal * 0.10
    : 0;


// Subtraction operator
let finalAmount = subtotal - discount;



// Template Literals


document.getElementById("customer").textContent =
    `${customerName}`;

document.getElementById("product").textContent =
    `${product}`;

document.getElementById("price").textContent =
    `₹${price}`;

document.getElementById("quantity").textContent =
    `${quantity}`;

document.getElementById("subtotal").textContent =
    `₹${subtotal}`;

document.getElementById("discount").textContent =
    `₹${discount}`;

document.getElementById("finalAmount").textContent =
    `₹${finalAmount}`;