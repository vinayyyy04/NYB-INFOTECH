let students = JSON.parse(localStorage.getItem("students"));

// Generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
const gen = idGenerator();

// Promise + Async/Await + API + Error Handling

async function loadStudent() {
    try {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();

// Destructuring

 const { first, last } = data.results[0].name;
 const { email } = data.results[0];

const student = {
    id: gen.next().value,
    name: first + " " + last,
    email: email
};

    students.push(student);

// Local Storage

    localStorage.setItem("students", JSON.stringify(students));

 // Session Storage

    sessionStorage.setItem("currentStudent", student.name);

    document.getElementById("output").innerHTML ="<h3>Student Added Successfully</h3>";

} catch (error) {
        document.getElementById("output").innerHTML = error.message;
    }
}

// Iterator

function showStudents() {

let iterator = students[Symbol.iterator]();

let result = iterator.next();

let html = "";

while (!result.done) {
        html += `<p>${result.value.id} -${result.value.name} -${result.value.email}</p>`;
        result = iterator.next();
}

 document.getElementById("output").innerHTML = html;
}

