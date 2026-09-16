const products = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Watch", price: 5000 }
];

const total = products.reduce(
    (sum, product) => sum + product.price,
    0
);

console.log(total);