const employee = {

    name: "Rahul",

    role: "Developer",

    skills: ["JavaScript", "HTML", "CSS"]

};


// Object Destructuring

const { name, role } = employee;

console.log(name);
console.log(role);


// Spread Operator

const updatedEmployee = {

    ...employee,

    role: "Senior Developer"

};

console.log(updatedEmployee);


// Deep Copy

const copiedEmployee =
    structuredClone(employee);

copiedEmployee.skills.push("React");

console.log("Original:", employee);

console.log("Copy:", copiedEmployee);