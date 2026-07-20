import Axios from "./Axioss";
import Contextt from "./Contextt";
import Fetch from "./Fetch";
import Propss from "./Propss";
// import FoodList from "./Task_17-07-2026/FoodList";
// import Navbar from "./Task_17-07-2026/Navbar";
import UseReducer from "./UseReducer";
import UseState from "./UseState";

function App() {
  return (
   <>
      <Propss name="vinay" items={20} />
      <Propss name="Yashwanth" items={25} />
      <UseState/>
      <Fetch/>
      <Axios/>
      <Contextt/>
      <UseReducer/> 
      {/* <Navbar/>
      <FoodList/> */}
</>
    
  );
}

export default App;