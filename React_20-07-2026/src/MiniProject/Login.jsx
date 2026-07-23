function Login({ setIsLoggedIn }) {

  return (

    <div className="card">

      <h2>Customer Login</h2>

      <input
        type="text"
        placeholder="Customer ID"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
      />

      <br /><br />

      <button onClick={() => setIsLoggedIn(true)}>
        Login
      </button>

    </div>

  );

}

export default Login;