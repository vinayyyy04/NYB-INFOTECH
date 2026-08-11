import UseEffect from "./UseEffect";
import Apicalls from "./ApiCalls";
import LoadingState from "./LoadingState";
import UseRef from "./UseRef";
import UseState from "./UseState";
import Store from "./Task_11-08-2026/WeatherApp";
import "./App.css";
import WeatherApp from "./Task_11-08-2026/WeatherApp";

function App(){
  return(
    <>
    <UseState/>
    <UseEffect/>
    <Apicalls/>
    <LoadingState/>
    <UseRef/>
    </>

    // <>
    // <WeatherApp/>
    // </>
  )
}

export default App;