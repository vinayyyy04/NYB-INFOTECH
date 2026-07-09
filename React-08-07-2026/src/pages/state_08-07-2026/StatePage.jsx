import Counter from "../../state_08-07-2026/Counter";
import Render from "../../state_08-07-2026/Render";
import State from "../../state_08-07-2026/State";

function StatePage(){
    return(
        <>
        <State/>
        <Counter/> 
        <Render/>      
        </>
    )
}

export default StatePage;