import { useState } from "react";

function Decrease(){
    let [count,setCount] = useState(0);
    return(
        <>
        <h2>Count:{count}</h2>

        <button onClick={() => setCount(count -1)}>
            Decrease
        </button>
        </>
    )
}

export default Decrease;