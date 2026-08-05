import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const viewProfile = () => {
    navigate("/profile", {
      state: {
        name: "Vinay",
        age: 23,
        course: "React JS"
      }
    });
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={viewProfile}>
        View Profile
      </button>
    </div>
  );
}

export default Home;