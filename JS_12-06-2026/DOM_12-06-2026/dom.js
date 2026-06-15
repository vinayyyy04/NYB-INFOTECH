//DOM-->Document object model is a programming interface for html documents.
//it represents a webpage as a tree structure of objects.
//it allows java script to access and maipulate html elements.


//getElementById()

// let heading = document.getElementById("titile");

// console.log(title);

//getElementByclassName()

let paragraph = document.getElementsByClassName("info");

console.log(paragraph);

//querySelecter()

let para = document.querySelector(".more");

console.log(para);

//querySelectorAll()

let graph = document.querySelectorAll(".more");

graph.forEach(item => {
    console.log(item);
});


//example
const button = document.getElementById("showEmployees");

button.addEventListener("click", () => {
    const employees = document.querySelectorAll(".employee-name");

    employees.forEach(employee => {
        console.log(employee.innerText);
    });
});

//read and modify DOM proprties

//innerText()-->
let heading = document.getElementById("title");
console.log(heading.innerText);  //read

heading.innerText = "welcome all";
console.log(heading); //modify

//innerHTML()-->
let box = document.getElementById("box");
console.log(box.innerHTML); //read

box.innerHTML = "<h2>welcome to NYB</h2>";
console.log(box);  //modify


//value()

let input = document.getElementById("username");
console.log(input.value);  //read

input.value ="vinay";
console.log(input); //modify

//style()--modifying css properties

let h = document.getElementById("greeting");

h.style.color = "black";
h.style.fontSize = "30px";
h.style.backgroundColor ="green";

//src 
let image = document.getElementById("image");
console.log(image.src);  //read

// image.src = "profile_2.png";  //modify

//id

let element = document.getElementById("demo");

console.log(element.id);

element.id ="newDemo";

console.log(element);

//className

let div = document.getElementById("dabba");

console.log(div.className);

div.className = "kothaContent";

console.log(div.className)
