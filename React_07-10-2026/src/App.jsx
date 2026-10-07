import ConditionalRerendering from "./ConditionalRerendering";
import DependencyArray from "./DependencyArray";
import Events from "./Events";
import FormComponents from "./FormComponents";
import Map from "./Map";
import MultipleFeilds from "./MultipleFeilds";
import Task from "./Task";
import Useeffect from "./Useeffect";
import UsestateUseeffect from "./UsestateUseeffect";

function App(){

  return(
    <>
  <Events/>


  <FormComponents/>

  <MultipleFeilds/>


  <Map/>

  <ConditionalRerendering/>

  <Useeffect/>

  <DependencyArray/>

  <UsestateUseeffect/>

  </>

  // <Task/>
  )
}

export default App;
