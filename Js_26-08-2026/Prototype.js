// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype → shared method
Person.prototype.introduce = function () {
  return `Hi, I am ${this.name}`;
};


// Class + Inheritance
class Employee extends Person {
  constructor(name, age, job) {
    // super() calls the parent constructor
    super(name, age);

    // Encapsulation using private property
    this._job = job;
  }

  // Method
  work() {
    return `${this.name} is working as a ${this._job}`;
  }

  // Getter method
  getJob() {
    return this._job;
  }
}


// Creating an object
const emp1 = new Employee("vinay", 22, "Software Engineer");

console.log(emp1.introduce());
console.log(emp1.work());

console.log(emp1.getJob());

// __proto__ → points to the prototype
console.log(emp1.__proto__);

// Prototype Chain
console.log(Employee.prototype);
console.log(Employee.prototype.__proto__);
console.log(Person.prototype);