import ComponentsPage from "./pages/components_08-07-2026/ComponentsPage"
import PropsPage from "./pages/props_08-07-2026/PropsPage"
import StatePage from "./pages/state_08-07-2026/StatePage"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
  return (
   <BrowserRouter>
  <Routes>
    <Route path='/props' element={<PropsPage/>}/>
    <Route path='/Components' element={<ComponentsPage/>}/>
    <Route path='/state' element={<StatePage/>}/>
  </Routes>
   </BrowserRouter>
   
 
  )
}
export default App


// import React from "react";
// import Parent11 from "./parent-child_08-07-2026/Parent1"; 
// import Parent12 from "./parent-child_08-07-2026/Parent2";
// import Employee from "./parent-child_08-07-2026/Employee";
// import Header from "./reusable-components_08-07-2026/Header";
// import Cars from "./reusable-components_08-07-2026/Cars";
// import Footer from "./reusable-components_08-07-2026/Footer";
// import Student from "./child-parent_08-07-2026/Student";
// import StudentDetails from "./child-parent_08-07-2026/StudentDetails";
// import Parenttt from "./child-child_08-07-2026/Parenttt";

// function App(){
//   return(
//     <div>
//       <h1>Parent and Child components</h1>

//       <Parent11/>
//       <Parent12/>

//       <h1>Employee Application</h1>
//       <Employee/>

//       <Header/>
//       <Cars/>
//       <Footer/>

//       <Student/>

//       <Parenttt/>

//     </div>
//   )
// }

// export default App;



