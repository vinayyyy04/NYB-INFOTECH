import { useState } from "react";


function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return { value, handleChange };
}

function FormHandling() {
  const name = useInput("");

  return (
    <>
      <h2>Student Registration</h2>

      <input
        type="text"
        value={name.value}
        onChange={name.handleChange}
        placeholder="Enter Name"/>

      <h3>{name.value}</h3>
    </>
  );
}

export default FormHandling;