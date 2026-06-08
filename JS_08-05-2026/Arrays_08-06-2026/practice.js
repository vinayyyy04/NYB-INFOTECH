// Employee Management System

// 1.Creating array
let employees = ["Vinay", "yashwanth", "sowmith"];
console.log("Employees:", employees);

// 2. Multidimensional Array
// [Employee ID, Name, Designation]

let employeeDetails = [
    [101, "Vinay", "Developer"],
    [102, "yashwanth", "manager"],
    [103, "sowmith", "HR"]
];

console.log("Employee Details:");
console.log(employeeDetails);

// 3. Adding Employees

employees.push("keerthy"); 
employeeDetails.push([104, "keerthy", "Marketing"]);

console.log("\nAfter Adding Employee:");
console.log(employees);
console.log(employeeDetails);

// 4. Removing Employees

employees.pop(); 
employeeDetails.pop();

console.log("After Removing Employee:");
console.log(employees);
console.log(employeeDetails);

// 5. Searching Employees
console.log("Searching Employees:");
console.log("Is yashwanth an employee?", employees.includes("yashwanth"));
console.log("Position of sowmith:", employees.indexOf("sowmith"));

// 6. Combining Arrays

let newEmployees = ["lokesh", "Sneha"];
let allEmployees = employees.concat(newEmployees);

console.log("Combined Employee List:");
console.log(allEmployees);

// Using Spread Operator

let allEmployeesSpread = [...employees, ...newEmployees];
console.log("Combined Using Spread Operator:");
console.log(allEmployeesSpread);

// 7. Array Iteration Techniques

for (let i = 0; i < allEmployees.length; i++) {
    console.log(allEmployees[i]);
}

for (let employee of allEmployees) {
    console.log(employee);
}

allEmployees.forEach((employee, index) => {
    console.log(`${index + 1}. ${employee}`);
}); 