//Event bubbling--it is a behaviour i the dom where a event starts on the target element and then propagates upward through its parent elements.
//child element-to-parent element

// document.getElementById("parent").addEventListener("click",() =>{
//     console.log("parent clicked");
// });

// document.getElementById("child").addEventListener("click", () =>{
//     console.log("button clicked");
// });

//multiple levels of bubbling

document.getElementById("grandparent").addEventListener("click",() =>{
    console.log("grandparent clicked");
});
document.getElementById("parent").addEventListener("click",() =>{
    console.log("parent clicked");
});

document.getElementById("child").addEventListener("click", () =>{
    console.log("child clicked");
});

//stopping event bubbling--stops the event from moving towards parent element.

// document.getElementById("child").addEventListener("click", () =>{
//     console.log("button clicked");
//     event.stopPropagation();
// });


//event capturing--it is the opposite of event bubbling
//parent element-to-child element

document.getElementById("grandparent").addEventListener("click",() =>{
    console.log("grandparent clicked");
},
true
);
document.getElementById("parent").addEventListener("click",() =>{
    console.log("parent clicked");
},
true
);

document.getElementById("child").addEventListener("click", () =>{
    console.log("child clicked");
},
true
);

//capturing vs bubbling

document.getElementById("parent").addEventListener(
    "click",
    () => {
        console.log("parent capturing");
    },
    true
);

document.getElementById("parent").addEventListener(
    "click",
    () => {
        console.log("parent bubbling");
    },
    false

);

document.getElementById("child").addEventListener("click",() =>{
    console.log("child clicked");
});


//event deligation--allows a parent element to handle events for its child elements,including elements added later.

let list = document.getElementById("list");
let addbtn = document.getElementById("addbtn");

//deligation

list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
       console.log("you clicked:" + event.target.textContent);
    }
});

//add dynamic elements 

let count = 4;

addbtn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.textContent = `number ${++count}`;
    list.appendChild(li);
});




