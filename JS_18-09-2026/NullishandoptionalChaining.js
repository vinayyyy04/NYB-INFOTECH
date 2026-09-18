const employee = {
    name: "Rahul",
    department: {
        name: "Development",
        manager: {
            name: "Priya"
        }
    },
    contact: null
};

// Optional Chaining
const managerName = employee.department?.manager?.name;
const phoneNumber = employee.contact?.phone;

console.log("Manager:", managerName);
console.log("Phone:", phoneNumber);

// Nullish Coalescing
const employeePhone = employee.contact?.phone ?? "Phone number not available";
const employeeCity = employee.city ?? "City not provided";

console.log("Phone:", employeePhone);
console.log("City:", employeeCity);