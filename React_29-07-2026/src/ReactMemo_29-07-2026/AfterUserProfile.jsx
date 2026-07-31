import React from "react";

function AfterUserProfile({ name }) {
  console.log("UserProfile Rendered");

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default React.memo(AfterUserProfile);