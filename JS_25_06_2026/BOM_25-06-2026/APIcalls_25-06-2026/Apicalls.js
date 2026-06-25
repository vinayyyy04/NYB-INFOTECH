//FETCH API-- it is a built-in java script interface used to send  HTTP requests and recevive responses from servers asynchronously.

//GET,POST,PUT,DELETE

//GET--retrives data  from a server without modifying it.

fetch("https://jsonplaceholder.typicode.com/users")

.then (res => res.json())
.then(data => {
    console.log((data));
})

//POST--sends new data to a server and crates a new resource.

fetch("https://jsonplaceholder.typicode.com/posts",{
    method: "POST",
    headers: { "content-type": "application/json"},
    body: JSON.stringify({title:"post"})
})

.then (res => res.json())
.then(data => {
    console.log((data));
})

//PUT--updates an existing resource by replacing it completely.

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "PUT",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({id:1 ,title:"updated post"})
})

.then(res => res.json())
.then(data =>{
    console.log((data));
})

//DELETE--removes a resource from the server.

fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method: "DELETE"
})

.then(()=>{
    console.log(("deleted"));
})

//fetch with async and await--provides a cleaner way to handle asynchronous fetch API operations.

async function getUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
    } catch (error){
        console.log(error)
    }
}

getUsers();


//API responses

async function getUser(){
    let response = await fetch ("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();

    document.getElementById("result").innerHTML = `<h2>${user.name}</h2> <p>${user.email}</p>`;
}


//errors in api

 async function getData() {
 try {
     const response = await fetch("https://jsonplaceholder.typicode.com/user");

if (!response.ok) {
    throw new Error("Failed to fetch data");
}

    const dataa = await response.json();
        document.getElementById("output").innerHTML = dataa[0].name;
} catch (error) {
     document.getElementById("output").innerHTML = error.message;
}

}


