import React from "react";

const UserCard = React.memo(({ name, onSelect }) => {
  console.log("UserCard rendered");

  return (
    <div className="user-card">
      <div className="avatar">
        {name.charAt(0)}
      </div>

      <div>
        <h3>{name}</h3>
        <p>Frontend Developer</p>
      </div>

      <button onClick={onSelect}>
        Select
      </button>
    </div>
  );
});

export default UserCard;