function UserProfile({ name }) {
  console.log("UserProfile Rendered");

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
    </div>
  );
}

export default UserProfile;