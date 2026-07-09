// import Counter from "./State_09-07-2026/Counter";
// import Message from "./State_09-07-2026/Message";
// import User from "./State_09-07-2026/User";
// import './App.css'
// import LocalState from "./localState_09-07-2026/LocalState";
// import UpdateState from "./localState_09-07-2026/UpdateState";
// import Decrease from "./localState_09-07-2026/Decrease";
// import MultipleStates from "./localState_09-07-2026/MultipleStates";
// import CreateComponent, { CounterContext, CounterProvider } from "./GlobalState_09-08-2026/CounterContext";

// import ControlComponent from "./GlobalState_09-08-2026/ControlComponent";
// import DisplayComponent from "./GlobalState_09-08-2026/DisplayComponent";


// function  App(){
//   return(
//     <>
     {/* <Counter/>
    <User/>
    <Message/> 

    <LocalState/>
    <UpdateState/>
    <Decrease/>
    <MultipleStates/> */}

    {/* <CounterProvider>
      <DisplayComponent />
      <ControlComponent/>
    </CounterProvider>

    </> */}

import UserContext from "./contextApi_09-07-2026/CreateContext.jsx";
import Home from "./contextApi_09-07-2026/Home.jsx";

 function App() {
  const name = "vinay";

  return (
    <UserContext.Provider value={name}>
      <Home />
    </UserContext.Provider>

  )
}

export default App;



