function Keys() {
  const students = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Arjun" }
  ];

  return (
    <div>
      <h2>Student List</h2>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Keys;