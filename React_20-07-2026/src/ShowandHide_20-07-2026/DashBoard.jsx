function DashBoard({ setIsLoggedIn }) {
  return (
    <div className="card">

      <h2>Welcome, Vinay</h2>

      <h3>Employee Dashboard</h3>

      <p>Employee ID : EMP109</p>

      <p>Department : FrontEnd Development</p>

      <p>Role : React Developer</p>

      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>

    </div>
  );
}

export default DashBoard;