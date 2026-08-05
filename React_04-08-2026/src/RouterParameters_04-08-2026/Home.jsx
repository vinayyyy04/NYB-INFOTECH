import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Student Portal</h1>

      <Link to="/student/101">Student 101</Link>
      <br /><br />

      <Link to="/student/102">Student 102</Link>
      <br /><br />

      <Link to="/student/103">Student 103</Link>
    </div>
  );
}

export default Home;