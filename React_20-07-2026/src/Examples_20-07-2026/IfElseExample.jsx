function IfElseExample() {

  const isLoggedIn = true;

  if (isLoggedIn) {
    return (
      <div className="card">
        <h2>Ifelse</h2>

        <h3>Welcome Back </h3>

        <p>You are successfully logged in</p>

      </div>
    );
  }

  return (
    <div className="card">


      <h3>Please Login</h3>

      <button>Login</button>

    </div>
  );
}

export default IfElseExample;