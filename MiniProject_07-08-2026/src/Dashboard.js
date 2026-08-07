import { Link, Outlet } from "react-router-dom";

function Dashboard() {

  return (

    <div>

      <h1>Dashboard</h1>

      <Link to="profile">

        Open Profile

      </Link>

      <hr />

      <Outlet />

    </div>

  );

}

export default Dashboard;