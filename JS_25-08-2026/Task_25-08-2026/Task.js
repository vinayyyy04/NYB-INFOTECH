// Object
const student = {
  name: "Vinay",
  age: 22,
  course: "B.Tech",

  address: {
    city: "Hyderabad"
  },

  // Object Method
  greet() {
    return `Hello! I am ${this.name}`;
  }
};


// Object Destructuring
const { name, age, course } = student;


// Display Student Details
document.getElementById("studentName").textContent = name;

document.getElementById("age").textContent = age;

document.getElementById("course").textContent = course;


// Optional Chaining
document.getElementById("city").textContent =
  student.address?.city;


// Nullish Coalescing
document.getElementById("phone").textContent =
  student.phone ?? "Not Available";


// Object.keys()
document.getElementById("showKeys").addEventListener("click", () => {

  const keys = Object.keys(student);

  document.getElementById("output").textContent =
    `Keys: ${keys.join(", ")}`;

});


// Object.values()
document.getElementById("showValues").addEventListener("click", () => {

  const values = Object.values(student);

  document.getElementById("output").textContent =
    `Values: ${values.join(", ")}`;

});


// Object.entries()
document.getElementById("showEntries").addEventListener("click", () => {

  const entries = Object.entries(student);

  document.getElementById("output").innerHTML = "";

  entries.forEach(([key, value]) => {

    document.getElementById("output").innerHTML +=
      `<p><strong>${key}:</strong> ${value}</p>`;

  });

});


// Spread Operator
// Create a new object with updated values
document.getElementById("updateStudent").addEventListener("click", () => {

  const updatedStudent = {
    ...student,
    age: 23,
    city: "Bangalore"
  };

  document.getElementById("age").textContent =
    updatedStudent.age;

  document.getElementById("output").textContent =
    "Student object updated using Spread Operator!";

  console.log(updatedStudent);

});


// Object.assign()
const collegeDetails = {
  college: "ABC Engineering College"
};

const completeStudent = Object.assign(
  {},
  student,
  collegeDetails
);

console.log(completeStudent);


// Rest Operator
const { name: studentName, ...remainingDetails } = student;

console.log("Name:", studentName);
console.log("Remaining Details:", remainingDetails);


// Object Method
console.log(student.greet());