import { useState } from "react";

function Message(){
    let [message,setMessage] = useState("welcome");


    return(
        <>
        <h2>Message:{message}</h2>
        <button onClick={() => setMessage("Hello all!!")}>
            Update message
        </button>
        </>
    )
}

export default Message;