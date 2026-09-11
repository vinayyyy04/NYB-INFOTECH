// 1. Synchronous vs Asynchronous JavaScript

console.log("Start");

// 2. setTimeout()
const timeoutId = setTimeout(() => {
    console.log("Timeout completed");
}, 2000);

// 3. setInterval()
const intervalId = setInterval(() => {
    console.log("Checking result...");
}, 1000);

// 4. clearTimeout()
clearTimeout(timeoutId);

// 5. clearInterval()
setTimeout(() => {
    clearInterval(intervalId);
}, 3000);


// 6. Callback Function
function getStudent(callback) {
    setTimeout(() => {
        callback("Vinay");
    }, 1000);
}

getStudent((name) => {
    console.log("Student:", name);
});


// 7. Callback Hell
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1");
        callback();
    }, 500);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2");
        callback();
    }, 500);
}

step1(() => {
    step2(() => {
        console.log("Step 3");
    });
});


// 8. Promise
const resultPromise = new Promise((resolve, reject) => {
    const marks = 85;

    if (marks >= 40) {
        resolve("Pass");
    } else {
        reject("Fail");
    }
});


// 9. .then()
// 10. .catch()
// 11. .finally()

resultPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Result checking completed");
    });


// 12. Promise.all()
const p1 = Promise.resolve("Maths");
const p2 = Promise.resolve("Physics");
const p3 = Promise.resolve("JavaScript");

Promise.all([p1, p2, p3])
    .then((subjects) => {
        console.log("All subjects:", subjects);
    });


// 13. Promise.race()
Promise.race([
    Promise.resolve("First response"),
    new Promise(resolve => setTimeout(() => resolve("Second response"), 1000))
])
.then((result) => {
    console.log("Race:", result);
});


// 14. Promise.allSettled()
Promise.allSettled([
    Promise.resolve("Passed"),
    Promise.reject("Failed")
])
.then((results) => {
    console.log("All results:", results);
});


// 15. Promise.any()
Promise.any([
    Promise.reject("Error 1"),
    Promise.resolve("Successful result"),
    Promise.resolve("Another result")
])
.then((result) => {
    console.log("Any:", result);
});


// 16. Async/Await
async function getResult() {
    try {
        const result = await resultPromise;
        console.log("Async/Await:", result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getResult();


// 17. Error Handling
try {
    const marks = 90;

    if (marks < 0) {
        throw new Error("Invalid marks");
    }

    console.log("Marks are valid");
} catch (error) {
    console.log("Error:", error.message);
}