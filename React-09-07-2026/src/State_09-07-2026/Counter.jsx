import { useState } from "react";

function Counter(){
    let [count,setCount] = useState(0);

    return(
        <>
        <h2>Employee:{count}</h2>
        <button onClick={() =>setCount(count +1 )}>
            Click here
        </button>
        </>
    )
}

export default Counter;