let employee = {
    name: "Rahul",
    age: 24,
    role: "Software Developer",
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

// Basic object destructuring
let { name, age, role } = employee;

console.log(name);
console.log(age);
console.log(role);


// Destructuring with renaming
let { name: employeeName, role: jobRole } = employee;

console.log(employeeName);
console.log(jobRole);


// Nested object destructuring
let {
    address: { city, state }
} = employee;

console.log(city);
console.log(state);
