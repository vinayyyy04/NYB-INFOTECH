console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise executed");
});

console.log("End");