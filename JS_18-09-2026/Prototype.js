// Constructor Function
function Employee(name, role) {
    this.name = name;
    this.role = role;
}

// Add method to prototype
Employee.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}, working as a ${this.role}.`);
};

Employee.prototype.work = function () {
    console.log(`${this.name} is working...`);
};

// Create objects
const employeeOne = new Employee("Rahul", "Developer");
const employeeTwo = new Employee("Priya", "Designer");

// Use prototype methods
employeeOne.introduce();
employeeOne.work();

employeeTwo.introduce();
employeeTwo.work();

// Check prototype
console.log(employeeOne.__proto__ === Employee.prototype);