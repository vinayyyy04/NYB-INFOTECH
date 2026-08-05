import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    alert("Login Successful!");
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <p>please login to view content</p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;