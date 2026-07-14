import { useContext } from "react";
import UserContext from "./UserContext";

function Profile(){
    let {user,setUser} = useContext(UserContext);

    return(
        <>
        <h2>Welcome,{user}</h2>
        <button onClick={() =>setUser("Keerthy")}>
            Change User
        </button>
        </>
    );
}

export default Profile;