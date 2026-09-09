
// 1. STUDENT DATA


const student = {
    name: "Vinay",
    age: 20,

    marks: [95, 82, 91, 68, 88],

    attendance: 82,

    hasSubmittedAssignment: true
};



// 2. TRUTHY AND FALSY VALUES


if (student.hasSubmittedAssignment) {

    console.log("Assignment submitted.");

} else {

    console.log("Assignment not submitted.");

}


// 3. FUNCTION DECLARATION


function calculateTotal(marks, callback) {

    let total = 0;


// 4. FOR...OF LOOP


    for (let mark of marks) {

        total += mark;
    }


 // 5. CALLBACK FUNCTION
 

    callback(total);
}



// CALLBACK


calculateTotal(student.marks, function(total) {

    console.log("Total Marks:", total);

});



// 6. FUNCTION EXPRESSION


const calculateAverage = function(total, subjects) {

    return total / subjects;
};



// 7. ARROW FUNCTION


const hasGoodAttendance = (attendance) => {

    return attendance >= 75;
};



// 8. PARAMETERS AND ARGUMENTS


const totalMarks = 394;

const averageMarks = calculateAverage(
    totalMarks,
    student.marks.length
);



// 9. DEFAULT PARAMETERS


function getStudentName(name = "Unknown Student") {

    return name;
}

const studentName = getStudentName(student.name);



// 10. REST PARAMETERS


function getHighestMark(...marks) {

    let highest = marks[0];


  
// FOR...OF
    

    for (let mark of marks) {

        if (mark > highest) {

            highest = mark;
        }
    }

    return highest;
}


const highestMark = getHighestMark(...student.marks);



// 11. ARGUMENTS OBJECT


function countSubjects() {

    return arguments.length;
}


const subjectCount = countSubjects(
    "English",
    "Mathematics",
    "Science",
    "Computer",
    "Social"
);



// 12. IF / ELSE IF / ELSE


let grade;


if (averageMarks >= 90) {

    grade = "A+";

}

else if (averageMarks >= 80) {

    grade = "A";

}

else if (averageMarks >= 70) {

    grade = "B";

}

else if (averageMarks >= 60) {

    grade = "C";

}

else {

    grade = "D";
}



// 13. NESTED CONDITIONS


let resultStatus;


if (averageMarks >= 40) {

    if (hasGoodAttendance(student.attendance)) {

        resultStatus = "PASS";

    } else {

        resultStatus = "Attendance Shortage";
    }

}

else {

    resultStatus = "FAIL";
}



// 14. SWITCH


let performance;


switch (grade) {

    case "A+":

        performance = "Excellent";

        break;


    case "A":

        performance = "Very Good";

        break;


    case "B":

        performance = "Good";

        break;


    case "C":

        performance = "Average";

        break;


    default:

        performance = "Needs Improvement";
}



// 15. TERNARY OPERATOR


const eligibility =
    student.age >= 18
        ? "Eligible"
        : "Not Eligible";



// 16. FOR LOOP


const marksContainer =
    document.getElementById("marksContainer");


for (
    let i = 0;
    i < student.marks.length;
    i++
) {

    const markElement =
        document.createElement("div");

    markElement.className = "mark";

    markElement.textContent =
        `Subject ${i + 1}: ${student.marks[i]}`;

    marksContainer.appendChild(markElement);
}



// 17. WHILE LOOP


let index = 0;


while (index < student.marks.length) {

    console.log(
        "Checking mark:",
        student.marks[index]
    );

    index++;
}



// 18. DO...WHILE LOOP


let attempts = 0;


do {

    attempts++;

} while (attempts < 3);


console.log("Attempts:", attempts);



// 19. FOR...IN


for (let key in student) {

    console.log(
        key,
        ":",
        student[key]
    );
}

// 20. RECURSIVE FUNCTION

function countdown(number) {

    // Base condition

    if (number === 0) {

        return;
    }


    console.log("Processing:", number);


    // Function calling itself

    countdown(number - 1);
}


countdown(3);



//  DISPLAY DATA ON WEBSITE


document.getElementById("studentName")
    .textContent = studentName;


document.getElementById("studentAge")
    .textContent = student.age;


document.getElementById("attendance")
    .textContent = student.attendance + "%";


document.getElementById("subjects")
    .textContent = subjectCount;


document.getElementById("totalMarks")
    .textContent = totalMarks;


document.getElementById("average")
    .textContent = averageMarks.toFixed(2);


document.getElementById("highestMark")
    .textContent = highestMark;


document.getElementById("grade")
    .textContent = grade;


document.getElementById("performance")
    .textContent = performance;


document.getElementById("result")
    .textContent = resultStatus;


document.getElementById("eligibility")
    .textContent = eligibility;