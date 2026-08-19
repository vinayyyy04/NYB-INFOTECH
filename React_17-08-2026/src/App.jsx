import ControlledComponent from "./ControlledComponent";
import DynamicFormFields from "./DynamicFormFields";
import FormHandling from "./FormHandling";
import FormValidation from "./FormValidation";
import UncontrolledComponent from "./UncontrolledComponent";
// import "./Task_17-08-2026/Task.css"
import RegistrationForm from "./Task_17-08-2026/RegistrationForm";

function App(){
  return(
    <>
    <ControlledComponent/>
    <UncontrolledComponent/>
    <FormHandling/>
    <FormValidation/>
    <DynamicFormFields/>
    </>

    // <>
    // <RegistrationForm/>
    // </>
  )
}

export default App;