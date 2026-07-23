function Login({ setIsLoggedIn, setRole }) {

  return (

    <div>

      <h1>NYB Infotech LLP</h1>

      <h2>Employee Login Portal</h2>

      <button onClick={() => {
        setRole("admin");
        setIsLoggedIn(true);
      }}>
        Login as Admin
      </button>

      <br /><br />

      <button onClick={() => {
        setRole("hr");
        setIsLoggedIn(true);
      }}>
        Login as HR
      </button>

      <br /><br />

      <button onClick={() => {
        setRole("manager");
        setIsLoggedIn(true);
      }}>
        Login as Manager
      </button>

      <br /><br />

      <button onClick={() => {
        setRole("employee");
        setIsLoggedIn(true);
      }}>
        Login as Employee
      </button>

    </div>

  );
}

export default Login;