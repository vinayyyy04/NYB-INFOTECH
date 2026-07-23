import Axios from "./Apicalls_21-07-2026/Axios";
import Fetch from "./Apicalls_21-07-2026/Fetch";
import Members from "./Errors_21-07-2026/Members";
import Users from "./Maps_21-07-2026/Users";
import RegistrationForm from "./MiniProject_21-07-2026/Employees";
import UseEffectCleanup from "./UseEffect_21-07-2026/UseEffectCleanUp";
import UseEffectEmptyDependency from "./UseEffect_21-07-2026/UseEffectEmptyDependancy";
import UseEffectNoDependency from "./UseEffect_21-07-2026/USeEffectNoDependancy";
import UseEffectWithDependency from "./UseEffect_21-07-2026/UseEffectWithDependancy";

function App(){
  return(
    <>
     <UseEffectNoDependency/>
    <UseEffectEmptyDependency/>
    <UseEffectWithDependency/>
    <UseEffectCleanup/> 
    {/* <Fetch/>
    <Axios/>  */}
     {/* <Users/>  */}
     {/* <Members/>  */}
    {/* <RegistrationForm/> */}
    </>
  )
}

export default App;