//normal copy-no new object is created both variales point to the same object
//normal copy--reference copy---both variables point to the same object so changes wont happen.

let student ={
    name:"yashwanth",
    branch:"ECE"
};
 let student1 = student;

student1.name = "sowmith";

console.log(student.name);
console.log(student1.name);

//shallow copy--using spread operator---creates new objects and copies top level properties.

let employee = {
    name:"vinay",
    role:"ASE"
};

let employee1 = {...employee};

employee1.name = "keerthy";

console.log(employee.name);
console.log(employee1.name);

//shallow copy a new object is created but nested objects are still shared.
//shallow copy--using object.assign()--

let employee2 = {
    name:"vinay",
    role:"manager"
};

let employee3 = Object.assign({},employee2);
employee3.role = "hr";

console.log(employee2.role);
console.log(employee3.role);

//deep copy-completely new object is created,including all nested objects.
//deep copy--using jason methods---creates completely idependent copy 

let student2 = {
    name:"yashwanth",
        city:"bangalore"
};

let student3 = JSON.parse(JSON.stringify(student2));

student3.city = "hyderabad";

console.log(student2.city);
console.log(student3.city);

//deep copy--usimg strucuturedclone()

let person1 = {
    name:"sai krupa",
    city:"medak"
};

let person2 = structuredClone(person1);

person2.city = "reddypally";

console.log(person1.city);
console.log(person2.city);


//shoallow copy for nested objects 

let employee4 = {
    name:"sowmith",
    address: {
        city:"medak"
    }
};

let employee5 = {...employee4};

employee5.address.city = "hyderabad";

console.log(employee4.address.city);
console.log(employee5.address.city);


function numbers(a,b,...numbers){
    console.log(numbers);


}

numbers(10,120,2039,30);


let numberss = [10,20,30,40];
let hi=[1,2,6,9,]
console.log(...numberss, ...hi);


