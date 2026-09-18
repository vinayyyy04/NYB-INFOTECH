// Student details
const student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript",
    skills: ["HTML", "CSS", "JavaScript"]
};

// 1. Object Destructuring
const { name, age, course } = student;

// 2. Array Destructuring
const [firstSkill, secondSkill, ...otherSkills] = student.skills;

// 3. Spread Operator
const updatedStudent = {
    ...student,
    city: "Chennai"
};

// 4. Rest Parameter
function calculateTotal(...marks) {
    return marks.reduce((total, mark) => total + mark, 0);
}

// 5. Template Literal
const total = calculateTotal(85, 90, 88);

console.log(`Student: ${name}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);

console.log(`First Skill: ${firstSkill}`);
console.log(`Second Skill: ${secondSkill}`);
console.log(`Other Skills: ${otherSkills.join(", ")}`);

console.log(`City: ${updatedStudent.city}`);
console.log(`Total Marks: ${total}`);