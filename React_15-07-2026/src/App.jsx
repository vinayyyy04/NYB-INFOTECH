import EmployeeForm from "./EmployeeForm/EmployeeForm";
import Counterr from "./Examples/Counter/Counterr";
import ShowRoom from "./multipleactions_15-07-2026/ShowRoom";
import Store from "./Reducer_15-07-2026/Store";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

function App(){
  return(
    <>
     <UseState/>
    <UseReducer/> 
     <Store/> 
    <ShowRoom/> 
    <Counterr/>
    <EmployeeForm/>
    <ShoppingCart/>
    </>

  )
}

export default App;