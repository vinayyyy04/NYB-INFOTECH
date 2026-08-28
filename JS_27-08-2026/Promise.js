const promise = new Promise((resolve) => {
  resolve("Data received");
});

promise.then((result) => {
  console.log(result);
});