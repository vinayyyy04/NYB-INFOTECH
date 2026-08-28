console.log("1");

Promise.resolve().then(() => {
  console.log("2 - Promise");
});

setTimeout(() => {
  console.log("3 - Timeout");
}, 0);

console.log("4");