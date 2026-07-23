function LogicalAndExample() {

let isPremium = true;

  return (
    <div className="card">

      <h2>Logical && Example</h2>

      <h3>Welcome User</h3>

      {
        isPremium &&
        <p>Premium Membership Activated</p>
      }


    </div>
  );
}

export default LogicalAndExample;