// Parent Class
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} is starting...`);
    }
}

// Child Class
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand); // Calls parent constructor
        this.model = model;
    }

    showDetails() {
        console.log(`Car: ${this.brand} ${this.model}`);
    }

    start() {
        super.start(); // Calls parent method
        console.log(`${this.model} is ready to drive!`);
    }
}

// Create object
const myCar = new Car("Toyota", "Camry");

myCar.showDetails();
myCar.start();