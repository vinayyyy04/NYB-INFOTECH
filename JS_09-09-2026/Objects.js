// ==========================================
// 1. CREATING AN OBJECT
// ==========================================

let student = {
    name: "Rahul",
    age: 21,
    course: "Computer Science",
    marks: 85,

    // Nested Object
    address: {
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: 600001
    },

    // Object Method
    getDetails() {
        return `${this.name} is studying ${this.course}`;
    }
};

console.log(student);


// ==========================================
// 2. ACCESSING PROPERTIES
// ==========================================

// Dot notation
console.log(student.name);
console.log(student.age);
console.log(student.course);

// Bracket notation
console.log(student["name"]);
console.log(student["marks"]);


// ==========================================
// 3. UPDATING PROPERTIES
// ==========================================

student.age = 22;
student.marks = 90;

console.log(student.age);
console.log(student.marks);


// Adding a new property
student.email = "rahul@example.com";

console.log(student.email);


// ==========================================
// 4. NESTED OBJECTS
// ==========================================

// Accessing nested properties

console.log(student.address.city);
console.log(student.address.state);
console.log(student.address.pincode);


// Updating a nested property

student.address.city = "Bengaluru";

console.log(student.address.city);


// ==========================================
// 5. OBJECT METHODS
// ==========================================

let details = student.getDetails();

console.log(details);


// ==========================================
// 6. Object.keys()
// ==========================================

// Gets all property names

let keys = Object.keys(student);

console.log("Keys:", keys);


// ==========================================
// 7. Object.values()
// ==========================================

// Gets all property values

let values = Object.values(student);

console.log("Values:", values);


// ==========================================
// 8. Object.entries()
// ==========================================

// Gets key-value pairs

let entries = Object.entries(student);

console.log("Entries:", entries);


// ==========================================
// 9. SHALLOW COPY
// ==========================================

// Creating a shallow copy

let shallowCopy = { ...student };

console.log("Shallow Copy:", shallowCopy);


// Updating a top-level property

shallowCopy.name = "Arun";

console.log("Original name:", student.name);
console.log("Copied name:", shallowCopy.name);


// ==========================================
// 10. DEEP COPY
// ==========================================

// Creating a deep copy

let deepCopy = structuredClone(student);

console.log("Deep Copy:", deepCopy);


// Updating a nested property in deep copy

deepCopy.address.city = "Mumbai";

console.log("Original city:", student.address.city);
console.log("Deep copy city:", deepCopy.address.city);