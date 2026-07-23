function Dashboard({ setIsLoggedIn }) {

  return (

    <div className="card">

      <h2>Welcome, vinay</h2>

      <hr />

      <h3>Account Number : 1234567890</h3>

      <h3>Available Balance : ₹2,45,000</h3>

      <h3>Account Type : Savings</h3>

      <br />

      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>

    </div>

  );

}

export default Dashboard;