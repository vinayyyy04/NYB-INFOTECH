const studentss = [
    { name: "Rahul", age: 20 },
    { name: "Anil", age: 21 },
    { name: "Priya", age: 20 }
];

const student = studentss.find(
    student => student.name === "Anil"
);

console.log(studentss);