import Employee from "./Employee";
import Child from "./Child";

function Parent (){
    let name = "Vinay";

    return(
        <>
        <Employee name={name} />
        <Child name={name} />
       
        </>
    );
}

export default Parent