import { useState } from "react";

function WithoutUseMemo() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const students = [
    "Vinay",
    "Yashwanth",
    "Sowmith",
    "Lokesh",
    "sandeep",
    "sai krupa",
    "sathwik",
    "vamshi",
    "datta sai",
    "sai nikhil",
  ];

  console.log("Filtering Students...");

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Without useMemo</h1>

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <h3>Count: {count}</h3>

      {filteredStudents.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </div>
  );
}

export default WithoutUseMemo;