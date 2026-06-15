//parent nodes-parentElement

let cars = document.getElementById("cars");

console.log(cars.parentElement);

//child nodes--children

let list = document.getElementById("list");

console.log(list.children);

//first child--firstElementChild

let lists = document.getElementById("list");

console.log(lists.firstElementChild);

//last child--lastElementChild

let last = document.getElementById("list");

console.log(last.lastElementChild);

//previous sibling--previousElementsibling

let css = document.getElementById("list");

console.log(css.previousElementSibling);

//last sibling--nectElementSibling

let html =document.getElementById("list");

console.log(html.nextElementSibling);


//creating Dom elements dynamically
//create an element using--createElement()

let heading = document.createElement("h1");

heading.textContent = "hello all";

document.getElementById("storage");

//creating a paragraph dynamically()

let para = document.createElement("p");

para.textContent = "these are the best cars in the sub-4 meters segment";

document.getElementById("storage").appendChild(para);

//creating a button dynamically()

let btn = document.createElement("button");

btn.innerText = "click here";

document.getElementById("storage").appendChild(btn);

//creating list dynamically
let car = document.createElement("li");

car.innerText = "renault duster";

document.getElementById("list").appendChild(car);


//Creating multipple elements by using loops


let carsss = ["creta","thar roxx","thar","kushaq"];

for(let car of carsss){
    let li = document.createElement("li");
    li.innerText = car;

    document.getElementById("list").appendChild(li); //adding multiple elements
}


//adding an element by using appenChild()

let heading2 = document.createElement("h3");

heading2.innerText = "Under 15lakhs";

document.getElementById("car brands").appendChild(heading2);


//removing an element using remove()

let pars = document.getElementById("para");

pars.remove();


//removing a child elemment using removeChild()

let parent =document.getElementById("list");
let child = document.getElementById("item");

parent.removeChild(child);


//eventListeners--

//button click event
document.getElementById("btn").addEventListener("click", function(){
    alert("hello!");
});


//input event

let input = document.getElementById("input").addEventListener("input", function(){
    console.log("you typed:",input.value);
});


//mouse over event

let graph = document.getElementById("message")
graph.addEventListener("mouseover", function (){
    graph.style.color = "blue";
});

//mouse out event()

graph.addEventListener("mouseout", function (){
    graph.style.color = "red";
});


