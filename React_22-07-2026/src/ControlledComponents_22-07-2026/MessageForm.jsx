//controlled TextArea Component

import { useState } from "react";

function MessageForm() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{message}</p>
    </div>
  );
}

export default MessageForm;