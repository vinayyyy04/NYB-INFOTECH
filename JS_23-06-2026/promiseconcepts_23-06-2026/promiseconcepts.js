//async and await
//async--makes a function return a promise.
//await--pauses execution untill a promise settles.
//await can only be used inside an async function.
//async  and await makes asynchronous code look like synchronous code.

//promise based code

function getUser (){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("successfull");
        },1000);
    });
}

async function fetchUser (){
    try {
        let user = await getUser();
        console.log(user);
    } catch (error){
        console.log(error);
    }
}

fetchUser();

//error handling

function getData (){
    return new Promise((resolve,reject) =>{
        reject("something went wrong,please try again!");
    });
}

async function fetchData (){
    try {
        let reult = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

//API call error handling

// async function getUserr (){
//     try {
//         let response = await fetch("invalid url!!");
//         if (!response.ok) {
//             throw new error("failed to get the details");

//         }
//         let data = await response.json();
//         console.log(data);
//     } catch (Error) {
//         console.log(error.message);
//     }
// }

// getUserr();



//try--code that may fail
//catch--handles errors
//finally--runs whether function is success or failure.
//throw new error--creats custom errors.


//destructuring
//
//array destructuring--extract values by position.

let bikes = ["bullet","classic 350","GT 650","hunter 350"];

var [firstbike,secondbike,thirdbike,fourthbike] = bikes;

console.log(firstbike);
console.log(secondbike);
console.log(thirdbike);
console.log(fourthbike);

//skipping the values

var [first, ,third,fourth]=bikes;

console.log(first);
console.log(third);


//object destructuring-extract values by property name.

let car = {
    name: "XUV 3X0",
    company: "mahindra",
    category: "sub 4 meters",
    price:1500000
};

var {name,company,category,price} = car;

console.log(name);
console.log(company);
console.log(category);
console.log(price);

//with renaming

var {name:carname, company:mahindracompany,price:onroadprice} = car;

console.log(carname);
console.log(mahindracompany);
console.log(onroadprice);

//iterators--iterator is an object that provides a next() method to access elements one by one.
let numberss = [10,20,30];

var iterator = numberss[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//iteratable object-it follows iteration protocol if it has a symbol.iterator method that returns an iterator.

let range = {
    start:1,
    end:3,
    [Symbol.iterator] (){
        let start = this.start;
        let end = this.end;
        return{
            next (){
                if(start <= end){
                    return {value: start++,done:false};

                }
                return {done:true};
            }
        } 
    }
    
}
     for (let num of range){
        console.log(num);
}


//generator function-- it is a special function that can pause and resume its execution using the yeild keyword.

function* numbers(){
    yield 1;
    yield 2;
    yield 3;
}

let gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

//loading data page

function* pages(){
    yield "page 1 data";
    yield "page 2 data";
    yield "page 3 data";
}

let page = pages();

console.log(page.next().value);
console.log(page.next().value);
console.log(page.next().value);
