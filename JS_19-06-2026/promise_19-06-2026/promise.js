//creating and consuing promises

let button = document.getElementById("btn");
let output = document.getElementById("output");

button.addEventListener("click", () => {

//creating promises
    let myPromise = new Promise((resolve,reject) =>{
        let success = true;
        setTimeout(()=>{
            if (success) {
                resolve("data loaded");

            } else {
                reject("failed to load details,please try again");
            }
        },2000);
    });



//consuming promises

myPromise 
.then((result) =>{
    output.textContent = result;

}) 

.catch((error) => {
    output.textContent = error;
});
});



//.then() and .catch()

button.addEventListener("click",()=>{
    const myPromise = new Promise((resolve,reject) =>{
        let success = true;

        setTimeout(()=>{
            if (success){
                resolve("promise resolved successfully");
            } else {
                reject("promise rejected");
            }
        },1000);
    });

    myPromise
    .then((response) =>{
        output.textContent = response;
    })
    .catch((error) =>{
        output.textContent = error;
    });
});

//.then--executes when the promise is reolved.
//.catch--executes when the promise is rejected.
//resolve--sends data to .then
//reject--sends data to .catch


//callback example

let bnt = document.getElementById("button");
let opt = document.getElementById("opt");

function fetchData(callback){
    setTimeout(()=>{
        callback("data recived");
    },1000);
}

bnt.addEventListener("click",()=>{
    fetchData((result)=>{
        output.textContent = result;
    });
});


//promise example

let myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data received successfully");
    },2000);
});

myPromise
.then((result)=>{
    console.log(result);
})

.catch((error)=>{
    console.log(error);
});