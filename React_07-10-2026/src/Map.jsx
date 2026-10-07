function Map() {
  const students = ["Rahul", "Priya", "Arjun", "Sneha"];

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default Map;