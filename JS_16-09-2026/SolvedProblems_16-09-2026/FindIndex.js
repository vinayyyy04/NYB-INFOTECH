const productss = [
    { name: "Laptop", price: 60000 },
    { name: "Phone", price: 30000 },
    { name: "Watch", price: 5000 }
];

const index = productss.findIndex(
    product => product.name === "Phone"
);

console.log(index);