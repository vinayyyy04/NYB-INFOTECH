// import React from "react";

// function App() {
//   const user = {
//     name: "Vinay",
//     age: 23,
//   };

//   return <Parent user={user} />;
// }

// function Parent({ user }) {
//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <Child user={user} />
//     </div>
//   );
// }

// function Child({ user }) {
//   return (
//     <div>
//       <h3>Child Component</h3>
//       <GrandChild user={user} />
//     </div>
//   );
// }

// function GrandChild({ user }) {
//   return (
//     <div>
//       <h4>GrandChild Component</h4>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// }

// export default App;

import Profile from "./contextApi_13-07-2026/Profile";
import Application from "./ManagementEX_13-07-2026/Application";
import Complete from "./usecontext_13-07-2026/Complete";

function App(){    
  return(
    <>
     <Profile/>
    <Complete/> 
    {/* <Application/> */}
    </>
  )
}

export default App;