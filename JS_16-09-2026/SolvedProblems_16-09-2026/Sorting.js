const students = [
    { name: "Rahul", marks: 75 },
    { name: "Anil", marks: 92 },
    { name: "Priya", marks: 85 }
];

const sortedStudents = [...students].sort(
    (a, b) => b.marks - a.marks
);

console.log(sortedStudents);