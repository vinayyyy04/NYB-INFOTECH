console.log("1. Start");

setTimeout(() => {
    console.log("3. setTimeout executed");
}, 1000);

let count = 0;

const timer = setInterval(() => {
    count++;
    console.log(`4. setInterval: ${count}`);

    if (count === 3) {
        clearInterval(timer);
        console.log("5. setInterval stopped");
    }
}, 500);

console.log("2. End");