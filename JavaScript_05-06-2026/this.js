//THIS-- it is a keyword which doesn't have a static value,instead its value is determined by how a function is called.

// //global scope--this 
// // console.log(this);

// //regular function--this
// function show () {
//     console.log(this);
// }
// show();

// //object method--this
// const person ={
//     name: "vinay",
//     greet (){
//         console.log("hello i'm" + this.name);
//     }
// };

// person.greet();

//obj vs r.function

// const student = {
//     name: "keerthy",
//     showName(){
//         console.log(this.name);
//     }
// };
// student.showName();

// const display = student.showName;
// display();

//arrow funtion--this

// let employee = {
//     name: "vinay",
//     greet: () => {
//     console.log(this.name);

//     }
// };
// employee.greet();
let emp = {
    name: "hi",
    greet: () => {
    console.log(window.name);

    }
};
emp.greet();

//this--inside arrow function

const user ={
    name:"vinay",
    showName() {
        const innerFunction =() => {
            console.log(this.name);
        };
        innerFunction();
    }
};
user.showName();


//we can use THIS keyword in three diffrent ways--call(),apply(),bind().

//call()

const employee1 = {
    name: "vinay",
};

const employee2 = {
    name: "yashwanth",
};

function displayy (){
    console.log("employee:" + this.name);

}
displayy.call(employee1);
displayy.call(employee2);


//apply()

let car1 = {
    brand: "mahindra",
};

let car2 = {
    brand: "BMW",
};

function showDetails(model) {
    console.log(this.brand + model);
}

showDetails.apply(car1,["india"]);
showDetails.apply(car2,["germany"]);

//bind()

let customer = {
    name: "keerthy",
};

function welcome (){
    console.log("welcome" + this.name);
}

let welcomeCustomer = welcome.bind(customer);

setTimeout(welcomeCustomer,1000);

// const person = {
//     name: "Vinay",

//     greet() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// person.greet();


// const persons= {
//     name: "Vinay",

//     greet() {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000);
//     }
// };

// person.greet();


let hi =  {
    name: "vinay",
    hello: function ()
{
    console.log(this.name);
}
};

hi.hello();


let student = {
    hi:"yash",
    hello: () => {
        console.log(this.hi)
    } 
}

student.hello();
