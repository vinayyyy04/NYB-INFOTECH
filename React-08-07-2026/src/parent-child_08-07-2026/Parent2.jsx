import React, {useState} from "react";
import Child2 from "./Child2";

function Parent12(){
    let [count,setCount] = useState(0);
    return(
        <div>
            <h2> vinay</h2>
            <button onClick={() => setCount(count + 1)}>
                increase count
            </button>

            <Child2 count={count}/>
        </div>
    )
}

export default Parent12;