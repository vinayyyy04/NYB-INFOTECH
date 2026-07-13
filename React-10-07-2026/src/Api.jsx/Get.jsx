import { useEffect,useState } from "react";


function Get(){
    let [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUsers(data.slice(0,5)));
    },[]);

    return(
        <div>
        <h2>User List</h2>

        {users.map((user) => (
            <p key={user.id}>
            {user.name} - {user.email}
            </p>       
         ))}
        </div>
    );
    
}

export default Get;