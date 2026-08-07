import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  function loginUser() {

    alert("Login Successful");

    navigate("/dashboard");

  }

  return (

    <div>

      <h1>Login Page</h1>

      <button onClick={loginUser}>

        Login

      </button>

    </div>

  );

}

export default Login;