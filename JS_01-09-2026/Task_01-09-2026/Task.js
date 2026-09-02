
// EMPLOYEE OBJECT


const employee = {

    name: "Vinay Reddy",

    role: "Frontend Developer",

    department: "Engineering",

    experience: 3,

    contact: {
        email: "Vinay@Nyb.com",
        phone: "9876543210"
    },

    office: {
        city: "Hyderabad",
        building: "Tech Park"
    },

    performance: {
        rating: 4.8,
        projectsCompleted: 12
    },

    salary: 65000,

    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git"
    ]
};



// ACCESSING OBJECT DATA


document.getElementById("employeeName").textContent =
    employee.name;

document.getElementById("employeeRole").textContent =
    employee.role;

document.getElementById("department").textContent =
    employee.department;

document.getElementById("experience").textContent =
    `${employee.experience} Years`;

document.getElementById("location").textContent =
    employee.office.city;

document.getElementById("email").textContent =
    employee.contact.email;

document.getElementById("projects").textContent =
    employee.performance.projectsCompleted;

document.getElementById("performance").textContent =
    `${employee.performance.rating}/5`;

document.getElementById("salary").textContent =
    `₹${employee.salary.toLocaleString()}`;


// OBJECT DESTRUCTURING


const {
    name,
    role,
    department
} = employee;

const {
    office: { city, building }
} = employee;

const {
    performance: { rating, projectsCompleted }
} = employee;



// SPREAD OPERATOR


const updatedEmployee = {

    ...employee,

    experience: 4,

    role: "Senior Frontend Developer"
};


// REST OPERATOR


const {
    name: employeeName,
    ...employeeDetails
} = updatedEmployee;



// OBJECT.KEYS()


const employeeKeys = Object.keys(employee);



// OBJECT.VALUES()


const employeeValues = Object.values(employee);



// OBJECT.ENTRIES()

const employeeEntries = Object.entries(employee);



// OPTIONAL CHAINING


const linkedIn =
    employee.social?.linkedIn;



// NULLISH COALESCING


const socialProfile =
    employee.social?.linkedIn ?? "Not Available";



// DISPLAY SKILLS

const skillsContainer =
    document.getElementById("skills");

employee.skills.forEach(skill => {

    const element =
        document.createElement("span");

    element.className = "skill";

    element.textContent = skill;

    skillsContainer.appendChild(element);
});



// DISPLAY OBJECT INFORMATION


const employeeData =
    document.getElementById("employeeData");

employeeData.innerHTML = `

    <strong>Name:</strong> ${employeeName}<br>

    <strong>Role:</strong> ${updatedEmployee.role}<br>

    <strong>Department:</strong> ${department}<br>

    <strong>Office:</strong> ${city}<br>

    <strong>Building:</strong> ${building}<br>

    <strong>Phone:</strong>
    ${employee.contact?.phone ?? "Not Available"}<br>

    <strong>LinkedIn:</strong>
    ${socialProfile}<br>

    <strong>Total Properties:</strong>
    ${employeeKeys.length}

`;



// UPDATE OBJECT


document
    .getElementById("updateButton")
    .addEventListener("click", () => {

        employee.office.city = "Chennai";

        employee.experience = 4;

        document.getElementById("location")
            .textContent = employee.office.city;

        document.getElementById("experience")
            .textContent = `${employee.experience} Years`;

        alert("Employee information updated!");
    });