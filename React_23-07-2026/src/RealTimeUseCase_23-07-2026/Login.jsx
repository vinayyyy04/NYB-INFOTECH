import { useState } from "react";

function Login({ onLogin }) {
  function Login({ onLogin }) {

  console.log("onLogin =", onLogin);

}
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      employeeId.trim() === "EMP109" &&
      password.trim() === "123456"
    ) {
      setError("");
      onLogin();
    } else {
      setError("Invalid Employee ID or Password");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f2f2f2",
    },

    card: {
      width: "400px",
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 10px gray",
      textAlign: "center",
    },

    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      fontSize: "16px",
      boxSizing: "border-box",
    },

    button: {
      width: "100%",
      padding: "12px",
      background: "#1976d2",
      color: "white",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
    },

    error: {
      color: "red",
      marginBottom: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>NYB Infotech</h1>

        <h2>Employee Login</h2>

        <input
          type="text"
          placeholder="Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}

        <button
          onClick={handleLogin}
          style={styles.button}
        >
          Login
        </button>

        <br />
        <br />

        <h3>Demo Login</h3>

        <p>
          Employee ID : <b>EMP109</b>
        </p>

        <p>
          Password : <b>123456</b>
        </p>
      </div>
    </div>
  );
}

export default Login;