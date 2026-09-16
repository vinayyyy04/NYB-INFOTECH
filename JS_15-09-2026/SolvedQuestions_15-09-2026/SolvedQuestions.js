
// ==========================================
// 1. FUNCTION DECLARATION
// Calculate annual salary
// ==========================================

function calculateAnnualSalary(salary) {
    return salary * 12;
}

console.log(
    "Annual Salary:",
    calculateAnnualSalary(employees[0].salary)
);


// ==========================================
// 2. FUNCTION EXPRESSION
// Calculate bonus
// ==========================================

const calculateBonus = function (salary) {
    return salary * 0.10;
};

console.log(
    "Bonus:",
    calculateBonus(employees[0].salary)
);


// ==========================================
// 3. ARROW FUNCTION
// Display employee information
// ==========================================

const employeeInfo = employee =>
    `${employee.name} - ${employee.department}`;

console.log(
    "Employee:",
    employeeInfo(employees[0])
);


// ==========================================
// 4. CALLBACK FUNCTION
// Process employee information
// ==========================================

function processEmployee(employee, callback) {
    return callback(employee);
}

const displayEmployee = employee =>
    `${employee.name} earns ₹${employee.salary}`;

console.log(
    "Employee Details:",
    processEmployee(
        employees[0],
        displayEmployee
    )
);


// ==========================================
// 5. HIGHER-ORDER FUNCTION
// Get all employee salaries
// ==========================================

function getEmployeeData(data, operation) {
    return data.map(operation);
}

const salaries = getEmployeeData(
    employees,
    employee => employee.salary
);

console.log(
    "Salaries:",
    salaries
);




// ==========================================
// 6. DEFAULT + REST PARAMETERS
// Calculate total salary
// ==========================================

function calculateTotalSalary(
    tax = 0,
    ...salaries
) {
    return salaries.reduce(
        (total, salary) =>
            total + salary,
        0
    ) - tax;
}

console.log(
    "Total Salary:",
    calculateTotalSalary(
        5000,
        ...salaries
    )
);


// ==========================================
// 7. GLOBAL, FUNCTION & BLOCK SCOPE
// ==========================================

const company = "TechCorp";

function showEmployeeScope(employee) {

    const department =
        employee.department;

    if (true) {

        let employeeName =
            employee.name;

        console.log(
            "Company:",
            company
        );

        console.log(
            "Department:",
            department
        );

        console.log(
            "Employee:",
            employeeName
        );
    }
}

showEmployeeScope(employees[0]);


// ==========================================
// 8. CLOSURE
// Count employee updates
// ==========================================

function createCounter() {

    let count = 0;

    return function () {

        count++;

        return count;
    };
}

const updateCounter =
    createCounter();

console.log(
    "Update:",
    updateCounter()
);

console.log(
    "Update:",
    updateCounter()
);

console.log(
    "Update:",
    updateCounter()
);


// ==========================================
// 9. IIFE
// Start employee system
// ==========================================

(function (employee) {

    console.log(
        `${employee.name}'s employee system started`
    );

})(employees[0]);


// ==========================================
// 10. var, let, const & HOISTING
// ==========================================

function showVariables(employee) {

    var id = 101;
    let name = employee.name;
    const department = employee.department;

    console.log(
        "ID:",
        id
    );

    console.log(
        "Name:",
        name
    );

    console.log(
        "Department:",
        department
    );
}

showVariables(employees[0]);

