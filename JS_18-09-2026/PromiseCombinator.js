// Promise 1
const firstTask = new Promise((resolve) => {
    setTimeout(() => resolve("Task 1 completed"), 1000);
});

// Promise 2
const secondTask = new Promise((resolve, reject) => {
    setTimeout(() => reject("Task 2 failed"), 2000);
});

// Promise 3
const thirdTask = new Promise((resolve) => {
    setTimeout(() => resolve("Task 3 completed"), 1500);
});


// 1. Promise.all()
// Runs all, but rejects if any one fails
Promise.all([firstTask, secondTask, thirdTask])
    .then(result => {
        console.log("Promise.all:", result);
    })
    .catch(error => {
        console.log("Promise.all Error:", error);
    });


// 2. Promise.race()
// First settled Promise wins
Promise.race([firstTask, secondTask, thirdTask])
    .then(result => {
        console.log("Promise.race:", result);
    })
    .catch(error => {
        console.log("Promise.race Error:", error);
    });


// 3. Promise.allSettled()
// Waits for all, whether fulfilled or rejected
Promise.allSettled([firstTask, secondTask, thirdTask])
    .then(result => {
        console.log("Promise.allSettled:", result);
    });


// 4. Promise.any()
// First fulfilled Promise wins
Promise.any([firstTask, secondTask, thirdTask])
    .then(result => {
        console.log("Promise.any:", result);
    })
    .catch(error => {
        console.log("Promise.any Error:", error);
    });