import { useState } from "react";

function User(){
    let [name,setName] = useState("Vinay");

    return(
        <>
        <h2>User:{name}</h2>
        <button onClick={() =>setName("keerthy")}>
            Change name
        </button>
        </>
    )
}

export default User;