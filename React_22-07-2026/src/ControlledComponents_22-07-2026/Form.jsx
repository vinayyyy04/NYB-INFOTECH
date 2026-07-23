//controlled input component.

import { useState } from "react";

function Form() {
  let [name, setName] = useState("");
return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"/>
      <p>Hello, {name}</p>
    </div>
  );
}

export default Form;