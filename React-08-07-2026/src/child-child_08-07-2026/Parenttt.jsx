import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parenttt() {
  const [message, setMessage] = useState("No Message");

  const receiveMessage = (data) => {
    setMessage(data);
  };

  return (
    <>
      <h1>Parent Component</h1>

      <Child1 sendMessage={receiveMessage} />

      <Child2 message={message} />
    </>
  );
}

export default Parenttt;