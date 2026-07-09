import { useState } from "react";

function UpdateState(){
    let [count,setCount] = useState(0);

    return(
        <div>
            <h3>Count:{count}</h3>

            <button onClick={() => setCount(count +1)}>
                Click here 
            </button>
        </div>
    )
}

export default UpdateState;