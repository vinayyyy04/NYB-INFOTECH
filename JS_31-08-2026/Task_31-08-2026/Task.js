
// STUDENT DATA


let students = [
    {
        name: "Vinay",
        marks: 85,
        course: "JavaScript"
    },
    {
        name: "Yashwanth",
        marks: 72,
        course: "Python"
    },
    {
        name: "Sowmith",
        marks: 91,
        course: "JavaScript"
    },
    {
        name: "sandeep",
        marks: 32,
        course: "Python"
    },
    {
        name: "Datta sai",
        marks: 78,
        course: "Java"
    },
    {
        name: "Keerthy",
        marks: 25,
        course: "JavaScript"
    }
];



// 1. ARRAY CREATION & ACCESSING

console.log("First Student:", students[0]);



// 2. map()


let studentNames = students.map(student => student.name);

console.log("Student Names:", studentNames);



// 3. filter()
// Find students who passed


let passedStudents = students.filter(
    student => student.marks >= 35
);

console.log("Passed Students:", passedStudents);



// 4. reduce()
// Calculate total marks


let totalMarks = students.reduce(
    (total, student) => total + student.marks,
    0
);

console.log("Total Marks:", totalMarks);


// Calculate average

let averageMarks = totalMarks / students.length;

document.getElementById("averageMarks").textContent =
    averageMarks.toFixed(1);



// 5. find()
// Find the first student with marks above 90


let topStudent = students.find(
    student => student.marks > 90
);

console.log("Top Student:", topStudent);

document.getElementById("topStudent").textContent =
    `🏆 First student scoring above 90: ${topStudent.name} (${topStudent.marks})`;



// 6. findIndex()
// Find the position of Kiran


let kiranIndex = students.findIndex(
    student => student.name === "Kiran"
);

console.log("Kiran Index:", kiranIndex);

document.getElementById("searchIndex").textContent =
    `🔎 Kiran's array index: ${kiranIndex}`;



// 7. some()
// Check whether any student failed


let anyFailed = students.some(
    student => student.marks < 35
);

console.log("Any Failed:", anyFailed);

document.getElementById("failedCheck").textContent =
    `⚠️ Is there any failed student? ${anyFailed ? "Yes ❌" : "No ✅"}`;



// 8. every()
// Check whether every student passed


let everyonePassed = students.every(
    student => student.marks >= 35
);

console.log("Everyone Passed:", everyonePassed);

document.getElementById("allPassed").textContent =
    `🎯 Did everyone pass? ${everyonePassed ? "Yes ✅" : "No ❌"}`;



// 9. sort()
// Sort students according to marks


let sortedStudents = [...students].sort(
    (a, b) => b.marks - a.marks
);

console.log("Sorted Students:", sortedStudents);



// 10. Set
// Remove duplicate courses


let courses = students.map(
    student => student.course
);

let uniqueCourses = [...new Set(courses)];

console.log("Unique Courses:", uniqueCourses);

document.getElementById("uniqueCourses").textContent =
    `📚 Available Courses: ${uniqueCourses.join(", ")}`;



// DISPLAY STUDENTS


function displayStudents(data) {

    let studentList =
        document.getElementById("studentList");

    studentList.innerHTML = "";

    data.forEach(student => {

        let status =
            student.marks >= 35 ? "PASS" : "FAIL";

        let statusClass =
            student.marks >= 35 ? "pass" : "fail";

        studentList.innerHTML += `
            <div class="student">

                <div class="student-info">
                    <h3>${student.name}</h3>
                    <p>${student.course}</p>
                </div>

                <div>
                    <div class="marks">
                        ${student.marks}
                    </div>

                    <strong class="${statusClass}">
                        ${status}
                    </strong>
                </div>

            </div>
        `;
    });
}


// Display initially

displayStudents(students);



// DASHBOARD COUNTS


document.getElementById("totalStudents").textContent =
    students.length;

document.getElementById("passedStudents").textContent =
    passedStudents.length;

document.getElementById("failedStudents").textContent =
    students.length - passedStudents.length;



// SORT BUTTON


document.getElementById("sortBtn").addEventListener(
    "click",
    () => {

        let sorted = [...students].sort(
            (a, b) => b.marks - a.marks
        );

        displayStudents(sorted);
    }
);