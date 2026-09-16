let employees = [
    { name: "Rahul", department: "IT", salary: 50000 },
    { name: "Priya", department: "HR", salary: 40000 },
    { name: "Arun", department: "IT", salary: 60000 },
    { name: "Kiran", department: "Sales", salary: 45000 },
    { name: "Anu", department: "IT", salary: 55000 }
];

// Filter employees with salary greater than 45000
let highSalaryEmployees = employees.filter(employee => employee.salary > 45000);

console.log("High Salary Employees:", highSalaryEmployees);


// Group employees by department
let groupedEmployees = employees.reduce((groups, employee) => {
    let department = employee.department;

    if (!groups[department]) {
        groups[department] = [];
    }

    groups[department].push(employee);

    return groups;
}, {});

console.log("Grouped Employees:", groupedEmployees);
