import { useState } from "react";
import StudentDetails from "./StudentDetails";

function Student() {
  const [message, setMessage] = useState("No Message");

  const handleMessage = (data) => {
    setMessage(data);
  };

  return (
    <>
      <h1>Parent Component</h1>
      <h2>{message}</h2>

      <StudentDetails sendMessage={handleMessage} />
    </>
  );
}

export default Student;