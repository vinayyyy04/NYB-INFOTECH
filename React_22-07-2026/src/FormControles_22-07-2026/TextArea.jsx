import { use, useState } from "react";

function TextArea(){
    let [message,setMessage] = useState("");

    return(
        <>
        <textarea
        placeholder="what's on your mind.."
        value={message}
        onChange={(e) => setMessage(e.target.value)}/>

        <p>{message}</p>
        </>
    );
}

export default TextArea;