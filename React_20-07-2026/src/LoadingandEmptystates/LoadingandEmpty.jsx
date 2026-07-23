import { useState } from "react";
import Loading from "./Loading";
import Dashboard from "./Dashboard";

function LoadingandEmpty() {

  const [loading, setLoading] = useState(false);
  const [employee, setEmployee] = useState(null);

  function login() {

    setLoading(true);

    setTimeout(() => {

      setEmployee({
        id:101,
        name:"Vinay",
        role:"Software Engineer"
      });

      setLoading(false);

    },3000);

  }

  if(loading){
    return <Loading />
  }

  if(employee){
    return <Dashboard employee={employee}/>
  }

  return(

    <div>

      <h1>ABC Technologies</h1>

      <button onClick={login}>
        Login
      </button>

    </div>

  )

}

export default LoadingandEmpty; 


// import { useState } from "react";

// import EmptyState from "./EmptyState";
// import Dashboard from "./Dashboard";
// import Loading from "./Loading";

// function App(){

//     const [loading,setLoading]=useState(false);

//     const [employee,setEmployee]=useState(null);

//     const [searched,setSearched]=useState(false);

//     function searchEmployee(){

//         setLoading(true);

//         setTimeout(()=>{

//             // Employee Not Found

//             setEmployee(null);

//             setLoading(false);

//             setSearched(true);

//         },3000);

//     }

//     if(loading){

//         return <Loading/>

//     }

//     if(searched && employee===null){

//         return <EmptyState/>

//     }

//     return(

//         <div>

//             <h1>ABC Technologies</h1>

//             <button onClick={searchEmployee}>
//                 Search Employee
//             </button>

//         </div>

//     )

// }

// export default App;