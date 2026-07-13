function Post() { 

 async function createUser() { 
    try { 
        const response = await fetch( "https://jsonplaceholder.typicode.com/users", 
            { 
                method: "POST", 
                headers: { "Content-Type": "application/json", 
                }, 

                body: JSON.stringify({ 
                    name: "Vinay", 
                    email: "chvinayk5@gmail.com", 
                    city: "Medak", 
                }), 
            } 
        ); 
if (!response.ok) { 
    throw new Error("POST request failed");
 } 
 let data = await response.json(); 
 console.log(data); 
 alert("User created successfully"); 
} catch (error) { 
    console.log(error.message); 
} 
} 

return ( 
<div> <h2>POST Request Example</h2> 
      <button onClick={createUser}> Create User </button> 
      </div> 
      ); 
    } 
    
export default Post;