// //built-in sort method--descending

// let values = [20,50,40,10,30];

// for (let i= 0; i < values.length -1;i++) {
//     for (let i= 0; i > values.length -1;i++) {
//         if (values[j] < values[j + 1]) {
//         let temp = values[j];
//         values[j] = values[j + 1];
//         values[j + 1] = temp;
//     }
// }
// }
// console.log(values);

// //objectes{}--are stored in key values pairs,sperated by: ,and each key value pair is seperated by commos(,),keys will be of strings and values can be of any kind

// //object litreal
// let employee = {
//     id:100,
//     name:"vinay",
//     role:"associate software engineer"
// };

// console.log (employee);

// //new object

// let newjoinie = new Object();

// employee.id=101;
// employee.name ="yashwanth";
// employee.role = "HR manager";

// console.log(employee);

// //access object properties

// console.log(employee.name);//dotted accessing 
// console.log(employee["role"]);//square bracket accessing

// //update object properties 

// employee.department = "finance";
// console.log(employee);

// //add new properties 

// employee.salary = 50000;
// employee.city = "hyderabad";

// console.log(employee);

// //delete properties

// delete employee.role;
// console.log (employee);

// //objects with methods

// let employees = {
//     name:"vinay",
//     role:"ASE",

//     displayDetails() {
//         console.log(`employees:${this.name},role: ${this.role}}`);
//     }
// };

// employees.displayDetails();

// //Real-life example for object manipulation

// let student = {
//     rollNo: 53,
//     name: "keerthy",
//     course: "Java",
//     feesPaid: true,

//     payFees() {
//         this.feesPaid = true;
//         console.log(`${this.name} has paid the fees.`);
//     }
// };

// console.log(student.name);   

// student.course = "Java full stack";  

// student.city = "hyderabad";      

// delete student.rollNo;         

// student.payFees();             

// console.log(student);


// //assigned for next day

// //constucter function

// function employeee (id,name,role) {
//     this.id = id;
//     this.name = name;
//     this.role = role;
// }

// let emp1 = new employeee(102,"keerthy","HR");
// console.log(emp1);



