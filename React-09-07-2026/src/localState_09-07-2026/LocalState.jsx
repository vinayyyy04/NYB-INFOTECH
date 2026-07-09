//local state is the data that belongs to a single react component.
//it is created using the useState hook and can only be accessed and updated inside that component.

import {useState} from "react"           //creating localstate.

function LocalState(){
    let [count,setCount] = useState(0);
    return(
        <h2>Count:{count}</h2>

    )
}

export default LocalState;


// let [name,setName] =eseState("vinay");
// return(
//     <h2>Name:{name}</h2>
// )