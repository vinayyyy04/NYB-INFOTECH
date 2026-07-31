import { useState, useMemo } from "react";

function WithUseMemo() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const students = [
    "vinay",
    "Rahul",
    "Ramesh",
    "Anil",
    "Kiran",
    "Ajay",
    "David",
    "Kumar",
    "John",
    "Surya",
  ];

  const filteredStudents = useMemo(() => {
    console.log("Filtering Students...");

    return students.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>With useMemo</h1>

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

export default WithUseMemo;