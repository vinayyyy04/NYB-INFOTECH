function startEngine() {
  return "BMW Engine Started! 🚗";
}

const carAction = startEngine;

function runCarAction() {
  document.getElementById("firstClassResult").innerText =
    carAction();
}