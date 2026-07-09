import {useState} from "react"

function MultipleStates(){
    let [name,setName] = useState("vinay");
    let [age,setAge] = useState(23);

    return(
        <>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>

        <button onClick={() => setName("vinay kumar")}>
            Change name
        </button>

        <button onClick={() => setAge(age +1 )}>
            increase age
        </button>
        </>
    )
}

export default MultipleStates;