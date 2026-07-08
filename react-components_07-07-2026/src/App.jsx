import "./App.css";

import Components from "./Components";
import Classcomponents from "./Classcomponents";
import Colors from "./Colors";
import Company from "./Company";
import Counter from "./Counter";
import Parent from "./Parent";
import Child from "./Child";
import Employee from "./Employee";

function App() {
  return (
    <div className="App">
      <h1>React Components Demo</h1>


      <Components />

      <Classcomponents />
      <Colors />
      <Company />
      <Counter />

      <Parent />

      <Child />
      {/* <Employee /> */}
    </div>
  );
}

export default App;