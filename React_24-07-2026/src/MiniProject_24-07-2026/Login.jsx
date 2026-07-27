function Login({ onLogin }) {
  return (
    <div className="login">
      <h1> Royal Motors</h1>

      <input type="text" placeholder="Username" />

      <input type="password" placeholder="Password" />

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Login;