const order = new Promise((resolve, reject) => {
    const paymentSuccess = true;

    if (paymentSuccess) {
        resolve("Order placed successfully!");
    } else {
        reject("Payment failed!");
    }
});

// Consume the Promise
order
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Order process completed.");
    });