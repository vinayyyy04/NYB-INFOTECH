import {useState} from "react";
import UserContext from "./UserContext";

function UserProvider({children}){

    let[user,setUser] = useState("vinay")

    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserProvider;