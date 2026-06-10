let orders = [
    { orderId: 101, customer: "Vinay", amount: 3500 },
    { orderId: 102, customer: "yashwanth", amount: 1800 },
    { orderId: 103, customer: "keerthy", amount: 200 }
];

orders.push({ orderId: 104, customer: "sowmith", amount: 1500 });

orders.unshift({ orderId: 100, customer: "lokesh", amount: 800 });

orders.splice(2, 0, { orderId: 105, customer: "Sai", amount: 200 });

console.log(orders);

orders.pop();
orders.shift();

console.log(orders);

console.log(orders.length);

console.log(
    orders.find(order => order.customer === "Vinay")
);

console.log(
    orders.findIndex(order => order.amount > 2000)
);

console.log(
    orders.some(order => order.amount < 2000)
);

console.log(
    orders.every(order => order.amount > 1000)
);

let customers = orders.map(order => order.customer);
console.log(customers);

let highValueOrders = orders.filter(order => order.amount >= 2500);
console.log(highValueOrders);

let totalSales = orders.reduce(
    (sum, order) => sum + order.amount,
    0
);
console.log(totalSales);

orders.forEach(order => {
    console.log(order.customer);
});

for (let order of orders) {
    console.log(order.amount);
}

let settledOrders = [...orders].sort(
    (a, b) => a.amount - b.amount
);

console.log(sortedOrders);

let arr = [...orders];

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j].amount > arr[j + 1].amount) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

console.log(arr);

let store = {
    name: "cloths Store",
    city: "hyderabad",
    totalOrders: orders.length,

    display() {
        console.log(
            `${this.name} - ${this.city} - ${this.totalOrders}`
        );
    }
};

console.log(store.name);

store.city = "Bangalore";

store.owner = "vikas";

delete store.totalOrders;

store.display();

console.log(store);