function JavascriptExpressions() {
  const name = "NYB Infotech";
  const year = 2026;
  const a = 10;
  const b = 20;

  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <h1>{name}</h1>

      <p>Current Year: {year}</p>

      <p>Addition: {a + b}</p>

      <p>Multiplication: {a * b}</p>

      <p>Company: {name.toUpperCase()}</p>

      <p>Number of Skills: {skills.length}</p>

      <p>First Skill: {skills[0]}</p>

      <p>Welcome to {name}!</p>

      <p>{year >= 2026 ? "Current Year" : "Previous Year"}</p>
    </div>
  );
}

export default JavascriptExpressions;