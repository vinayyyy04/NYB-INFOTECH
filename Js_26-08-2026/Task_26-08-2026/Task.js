// Parent Class
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    return `${this.brand} ${this.model} has started.`;
  }
}


// Child Class
class Car extends Vehicle {
  constructor(brand, model, fuelType) {

    // Call the parent class constructor
    super(brand, model);

    this.fuelType = fuelType;
  }

  drive() {
    return `${this.brand} ${this.model} is driving.`;
  }
}


// Creating objects
const vehicle1 = new Vehicle("Honda", "Activa");

const car1 = new Car(
  "Hyundai",
  "Creta",
  "Petrol"
);


// Get container
const container = document.getElementById("vehicleContainer");


// Display Vehicle and Car details
container.innerHTML = `

  <div class="card vehicle-card">
    <h2>Vehicle</h2>

    <p><strong>Brand:</strong> ${vehicle1.brand}</p>
    <p><strong>Model:</strong> ${vehicle1.model}</p>

    <button onclick="startVehicle()">
      Start Vehicle
    </button>
  </div>


  <div class="card car-card">
    <h2>Car</h2>

    <p><strong>Brand:</strong> ${car1.brand}</p>
    <p><strong>Model:</strong> ${car1.model}</p>
    <p><strong>Fuel Type:</strong> ${car1.fuelType}</p>

    <button onclick="driveCar()">
      Drive Car
    </button>
  </div>
`;


// Vehicle method
function startVehicle() {
  alert(vehicle1.start());
}


// Car methods
function driveCar() {
  alert(
    `${car1.start()}\n${car1.drive()}`
  );
}


// Object relationship
console.log(car1 instanceof Car);     
console.log(car1 instanceof Vehicle);  