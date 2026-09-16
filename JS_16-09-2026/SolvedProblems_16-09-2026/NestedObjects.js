const employee1 = {

    name: "Rahul",

    age: 24,

    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }

};

console.log(employee1.address.city);

// Update property
employee1.address.city = "Hyderabad";

console.log(employee1);