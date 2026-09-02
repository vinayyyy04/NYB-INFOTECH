const student4 = {
    name: "Sowmith",
    age: 22
};

const updatedStudent = {
    ...student4,
    course: "JavaScript"
};

console.log(updatedStudent);