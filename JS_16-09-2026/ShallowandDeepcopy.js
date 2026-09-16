let employee = {
    name: "Rahul",
    age: 24,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};


// Shallow Copy
let shallowCopy = { ...employee };

shallowCopy.name = "Arun";
shallowCopy.address.city = "Bangalore";

console.log("Original after Shallow Copy:", employee);
console.log("Shallow Copy:", shallowCopy);


// Deep Copy
let deepCopy = structuredClone(employee);

deepCopy.name = "Kiran";
deepCopy.address.city = "Hyderabad";

console.log("Original after Deep Copy:", employee);
console.log("Deep Copy:", deepCopy);

