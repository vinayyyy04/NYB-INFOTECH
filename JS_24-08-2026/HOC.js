function sayHello() {
  console.log("Hello");
}

function executeFunction(callback) {
  callback();
}

executeFunction(sayHello);