const person = {
  name: "lokesh",

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

person.greet();