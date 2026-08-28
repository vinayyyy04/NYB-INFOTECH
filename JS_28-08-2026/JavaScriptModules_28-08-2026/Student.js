// studentData.js

// Student object
export const student = {
    name: "vinay",
    age: 22,

    address: {
        city: "Hyderabad"
    }, 

    marks: [80, 85, 90]
};


// Function using Rest Operator
export function calculateTotal(...marks) {

    return marks.reduce((total, mark) => {
        return total + mark;
    }, 0);

}


