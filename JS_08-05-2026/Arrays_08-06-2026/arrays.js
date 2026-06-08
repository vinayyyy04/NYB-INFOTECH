//ARRAYS-->it is collection of homogenious and hetrogenious elements.
//we can store any data types objects etc in arrays. 
let numbers  = [20,40,60,80];
let names = ["vinay","yashwanth","sowmith","lokesh"];

let details = ["vinay",22,true,{city:"hyderabad"}];

console.log(numbers);
console.log(names);
console.log(details);

//multidimensional arrays-->storing many arrays in a single array is called multidimensional arrays.
//accessing the elements
let employeess = [
  ["vinay", "Developer", 15000],
  ["yashwanth", "Designer", 18000],
  ["sowmith", "Manager", 15000]
];

console.log(employeess[0][2]); 

//modifyimg elements using indexes

let bikes = ["royal enfield","triumph","bajaj"];
console.log(bikes);

bikes[2] = "yamaha";

console.log(bikes);

//adding elements using push();

bikes.push("tvs");
console.log(bikes);

//adding elements in the beginning using unshift();

bikes.unshift("suzuki");
console.log(bikes);

//adding elements at any position using splice();

bikes.splice(1,0,"honda");
console.log(bikes);

//removing last element using pop();

bikes.pop();
console.log(bikes);

//removing first element using shift()

bikes.shift();
console.log(bikes);

//finding the lenght of an array.

console.log(bikes.length);


//indexof() it is used to find a particular index of an array.

console.log(bikes.indexOf("royal enfield"));

//include() it shows trur or false depends on the condition given.

console.log(bikes.includes("triumph"));

//lastindexof() is is used to find the last occurrence of a specified value within a string or an array.

let bikess = ["royal enfield","yamaha","tvs","royal enfield","bajaj"];

console.log(bikess.lastIndexOf("royal enfield"));
console.log(bikess.lastIndexOf("triumph"));

// example

let students = ["vinay","keerthy","yashwanth","sowmith","lokesh",];

console.log(students.length);
console.log(students.includes("ramesh"));
console.log(students.includes("vinay"));
console.log(students.indexOf("keerthy"));
console.log(students.lastIndexOf("yashwanth"));

//making arrays empty
//assiging empty array
bikes = [];
console.log(bikes);

//setting length to zero 

bikes.length = 0;

console.log(bikes);

//using splice()

bikes.splice(0,bikes.length);

console.log(bikes);

//combing arrays uisng concat().

let batch1 = ["vinay","thar roxx"];
let batch2 = ["yashwanth","swift"];

let group = batch1.concat(batch2);

console.log(group);

//combining using spread operator(...)

let groupp = [...batch1,...batch2];
console.log(groupp);


//loop through using for loop

let bikesss = ["bullet","truimph","tvs","classic 350",]
for (let i = 0;i < bikes.length; i++) {
    console.log(bikesss[i]);
}

//loop through using for ..of loop

for (let bike of bikesss) {
    console.log(bikesss);
}

//loop through using for..each loop

bikesss.forEach(function(bikesss){
    console.log(bikesss);
});
