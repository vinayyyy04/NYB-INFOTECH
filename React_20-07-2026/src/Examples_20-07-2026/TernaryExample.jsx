function TernaryExample() {

  const age = 23;

  return (
    <div className="card">

<h2>ternary</h2>
      {
        age >= 18? <h3>Eligible to Vote </h3> : <h3>Not Eligible </h3>
      }

    </div>
  );
}

export default TernaryExample;