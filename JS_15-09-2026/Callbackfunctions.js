
function orderFood(food, callback) {
    console.log(`Ordering ${food}...`);

    setTimeout(() => {
        console.log(`${food} is ready!`);
        callback();
    }, 2000);
}

function delivery() {
    console.log("Food is out for delivery 🚚");
}

orderFood("Pizza", delivery);


