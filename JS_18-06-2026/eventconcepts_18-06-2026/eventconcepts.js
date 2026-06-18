//click event 

document.getElementById("btn").addEventListener("click",function (){
    ("button clicked");
});

//input event

document.getElementById("name").addEventListener("input",function(event){
    console.log(event.target.value);

});

//change event

document.getElementById("cars").addEventListener("change",function(event){
    console.log(event.target.value);

});
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted Thank you!!");
});

//debounching--Debouncing delays the execution of a function until the user stops typing for a specified time.
//searchbox
let searchBox = document.getElementById("searchBox");

function searchData() {
    console.log("Searching:", searchBox.value);
}

function debounce(func, delay) {
    let timer;

    return function () {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

const debouncedSearch = debounce(searchData, 1000);

searchBox.addEventListener("keyup", debouncedSearch);

//throttling--Throttling limits how often a function can execute.

function handleScroll() {
    console.log("Scroll Event Triggered");
}

function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);

//callback function-- is a function passed as an argument to another function and executed later when needed.

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("how are you!");
}

greet("Vinay", sayBye);

//callback after calculation

function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}

function display(result) {
    console.log("Result:", result);
}

calculate(69, 20, display);

//callback with setTimeout()

function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);


//these are the key diffrences between normal event,thorttling and debouncing

//  Feature     -> Normal Event Handling            ->Throttling                   ->Debouncing                          

//  Execution   >> Runs every time the event occurs >> Runs at fixed intervals      >> Runs only after the event stops     
//  Frequency   >> Very high                        >> Limited                      >> Only once after delay               
//  Performance >>Can be slow for frequent events  >> Better performance           >> Best for reducing unnecessary calls 
//  Use Case    >>Button clicks                    >> Scroll, resize, mousemove    >> Search box, autocomplete            
//  Example     >>Executes on every key press      >> Executes once every 1 second >> Executes after user stops typing    
