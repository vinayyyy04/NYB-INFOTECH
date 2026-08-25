function showCarReady(carName) {
  document.getElementById("callbackResult").innerText =
    carName + " is ready to drive!";
}

function turnOnEngine(callback) {
  const carName = "BMW";

  callback(carName);
}

function startCar() {
  turnOnEngine(showCarReady);
}