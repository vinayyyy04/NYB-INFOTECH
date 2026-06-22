//promiseall()--it will resolve when all promises get succed.if any one promise is false it will return failure.

let p1 = Promise.resolve("car checked");
let p2 = Promise.resolve("car reviewd");
let p3 = Promise.resolve("car testrided");
let p4 = Promise.resolve("car bought");


Promise.all([p1,p2,p3,p4])

.then(result =>{
    console.log(result);
})
.catch(error =>{
    console.log(error)
});


//promise.race()--returns the value of promise which is completing first.


let p5 = new Promise(resolve =>{
    setTimeout(() =>resolve("engine started"),1000)
});

let p6 = new Promise(resolve =>{
    setTimeout(() => resolve("fuel checked"),2000)
});

Promise.race([p5,p6])

.then(result =>{
    console.log(result)
})

.catch(error =>{
    console.log(error)
});


//promise.allsetteled()--shows all promises inspite of resolve and reject.

Promise.allSettled([p1,p2,p3,p4,p5,p6])

.then(result =>{
    console.log(result)
});

//promise.any()--returns the first successfully completed promise inspite of resolve or reject.


let p7 = Promise.reject("engine failed");

let p8 = new Promise(resolve =>{
    setTimeout(()=> resolve("engine started"),1000)
});

let p9 = Promise.reject("fuel isseues");

Promise.any([p7,p8,p9])

.then (result =>{
    console.log(result)
})

.catch(error =>{
    console.log(error)
});


//behvaiour and use cases of promises.

// Method	            Behavior	                                      When it Resolves	              When it Rejects	                   

// Promise.all()	   Waits for all promises	                           When all promises succeed	  If any one promise fails    Loading multiple API calls where all data is required

// Promise.race()	   Returns the first settled promise	               First promise that resolves	   First promise that rejects    Getting the fastest response from multiple sources

// Promise.allSettled()	 Waits for all promises and returns their status	After all promises finish	    Never rejects                 Generating reports where success and failure details are both needed

// Promise.any()	    Returns the first successful promise	             First promise that resolves	 When all promises fail	           Using backup servers and accepting the first successful response


//execution process--it starts in the pending state,then moves to either fullfilled when resolve() is called
//or rejected when reject() is called.
//the .then() method handles success.
//the .catch() methods handles failure.


//create promise
//   |
//pending
//   |
//resolve + fullfilled + .then()
//or
//reject + rejected + .catch()   


//async-- makes a function return a promise automatically.

async function greet(){
    return "hello guys";
}

greet().then(result =>{
    console.log(result)
});

//await-- pauses a execution untill a promise is resolved.

function getData (){
    return new Promise(resolve =>{
        setTimeout(()=> resolve("Data Received"),1000)
    });
}

async function fetchData(){
    let result = await getData();
    console.log(result);
}

fetchData();


//async makes a function return a promise,and await pauses the execution inside an async function untill a promise is resolved or rejected.
