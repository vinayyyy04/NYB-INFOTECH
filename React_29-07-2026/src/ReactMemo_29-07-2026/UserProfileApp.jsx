import { useState } from "react";
import UserProfile from "./UserProfile";

function UserProfileApp() {
  const [count, setCount] = useState(0);

  console.log("App Rendered");

  return (
    <div>
      <h1> Demo--Before&After using React.demo</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <UserProfile name="Vinay" />
    </div>
  );
}

export default UserProfileApp;