import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  return (
    <div>
      <h1>User Profile</h1>

      <h3>Name: {location.state.name}</h3>
      <h3>Age: {location.state.age}</h3>
      <h3>Course: {location.state.course}</h3>
    </div>
  );
}

export default Profile;