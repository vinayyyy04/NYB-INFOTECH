function SwitchExample() {

  const role = "employee";

  let message;

  switch (role) {

    case "admin":
      message = "Welcome Admin";
      break;

    case "manager":
      message = "Welcome Manager";
      break;

    case "employee":
      message = "Welcome Employee";
      break;

    default:
      message = "Welcome Guest";
  }

  return (
    <div className="card">

      <h2>Switch Case Example</h2>

      <h3>{message}</h3>

    </div>
  );
}

export default SwitchExample;