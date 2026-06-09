//object litreal
let employee = {
    id:100,
    name:"vinay",
    role:"associate software engineer"
};

console.log (employee);
//new object

// let employee = new Object();

employee.id=101;
employee.name ="yashwanth";
employee.role = "HR manager";

console.log(employee);


//constucter function

function employeee (id,name,role) {
    this.id = id;
    this.name = name;
    this.role = role;
}

let emp1 = new employeee(102,"keerthy","HR");
console.log(emp1);

//access object properties

console.log(employee.name);
console.log(employee["role"]);

//update object properties 

employee.department = "finance";
console.log(employee);

//add new properties 

employee.salary = 50000;
employee.city = "hyderabad";

console.log(employee);

//delete properties

delete employee.role;
console.log (employee);

//objects with methods

// let employees = {
//     id:101,
//     name:"vinay",
//     role:"ASE",

//     displayInfo: function() {
//         console.log(`employees:$(this.name),role: $(this.role)}`);
//     }
// };

// employees.displayInfo();

//Real-life example for object manipulation

let student = {
    rollNo: 53,
    name: "keerthy",
    course: "Java",
    feesPaid: true,

    payFees() {
        this.feesPaid = true;
        console.log(`${this.name} has paid the fees.`);
    }
};

console.log(student.name);   

student.course = "Java full stack";  

student.city = "hyderabad";      

delete student.rollNo;         

student.payFees();             

console.log(student);
