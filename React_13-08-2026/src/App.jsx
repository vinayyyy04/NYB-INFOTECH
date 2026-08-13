import CustomHookApp from "./CustomHook_13-08-2026/CustomHookApp";
import LazyLoadingApp from "./LazyLoading_13-08-2026/LazyLoadingApp";
import ReactMemoApp from "./ReactMemo_13-08-2026/ReactMemoApp";
import EmployeePortalApp from "./Task_13-08-2026/EmployeePortalApp";
import UseCallbackApp from "./UseCallback_13-08-2026/UseCallbackApp";
import UseMemoApp from "./UseMemo_13-08-2026/UseMemoApp";
import "./App.css";

function App(){
  return(
    <>
    <ReactMemoApp/>
    <UseMemoApp/>
    <UseCallbackApp/>
    <CustomHookApp/>
    <LazyLoadingApp/>
    </>

    // <>
    // <EmployeePortalApp/>
    // </>
  )
}

export default App;