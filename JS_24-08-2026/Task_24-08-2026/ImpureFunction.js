let fuel = 50;

function driveCar() {
  fuel -= 5;

  document.getElementById("fuel").innerText =
    fuel + " Litres";
}