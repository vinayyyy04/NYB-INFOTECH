const student5 = {
    name2: "Sowmith",
    age: 22,
    course: "JavaScript"
};

const { name2, ...details } = student5;

console.log(name2);
console.log(details);