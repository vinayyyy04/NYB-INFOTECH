function* orderStatus() {
    yield "Order Placed";
    yield "Order Confirmed";
    yield "Order Shipped";
    yield "Order Delivered";
}

const status = orderStatus();

console.log(status.next().value);
console.log(status.next().value);
console.log(status.next().value);
console.log(status.next().value);
console.log(status.next());