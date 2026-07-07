import { useState } from "react";

function Counter(){
    let [count,setcount] = useState(0);

    return(
        <>
        <h1>count:{count}</h1>
        <button onClick={() => setcount(count + 1)}>
            Click Here
        </button>
        </>
    );
}

export default Counter;