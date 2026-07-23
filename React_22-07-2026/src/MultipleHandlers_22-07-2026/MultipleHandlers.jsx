import { useState } from "react";

function MultipleHandlers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

let handleChange = (e) => {
let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}/>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}/>

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}/>

      <h3>My Details</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
    </>
  );
}

export default MultipleHandlers;