let student = {
    name: "Rahul",
    age: 21,
    address: {
        city: "Chennai",
        state: "Tamil Nadu",
        pincode: 600001
    },
    marks: {
        maths: 85,
        science: 90
    }
};

// Access nested properties
console.log(student.address.city);
console.log(student.marks.maths);


// Update nested properties
student.address.city = "Bangalore";
student.marks.maths = 95;


// Add a new nested property
student.address.country = "India";
student.marks.english = 88;


// Delete a nested property
delete student.address.pincode;


console.log(student);
