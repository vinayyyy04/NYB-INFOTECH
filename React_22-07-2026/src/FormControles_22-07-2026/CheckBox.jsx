import { useState } from "react";

function CheckBox() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
        />
        Accept Terms
      </label>

      <p>{accepted ? "Accepted" : "Not Accepted"}</p>
    </>
  );
}

export default CheckBox;