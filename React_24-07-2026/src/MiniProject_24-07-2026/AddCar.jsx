import { useState } from "react";
import venue from "../assets/Venue.png";

function AddCar({cars,setCars}){

const [name,setName]=useState("");
const [price,setPrice]=useState("");

const addCar=()=>{

if(name==="" || price===""){

alert("Fill all fields");

return;

}

setCars([
...cars,
{
id:Date.now(),
name,
price,
image:venue,
}
]);

setName("");
setPrice("");

}

return(

<div className="form">

<input
placeholder="Car Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<button onClick={addCar}>
Add Car
</button>

</div>

)

}

export default AddCar;