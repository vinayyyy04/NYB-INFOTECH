function Dashboard() {
  const employee = {
    id: "EMP109",
    name: "Rahul Sharma",
    designation: "React Developer",
    department: "Software Development",
    email: "rahul.sharma@nybinfotech.com",
    phone: "+91 9876543210",
    salary: "₹8,50,000",
    location: "Hyderabad",
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f2f2f2",
    },

    card: {
      width: "500px",
      background: "white",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 0 10px gray",
      lineHeight: "2",
    },

    heading: {
      textAlign: "center",
      color: "#1976d2",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>
          NYB Infotech
        </h1>

        <h2 style={{ textAlign: "center" }}>
          Employee Dashboard
        </h2>

        <hr />

        <p><strong>Employee ID :</strong> {employee.id}</p>

        <p><strong>Name :</strong> {employee.name}</p>

        <p><strong>Designation :</strong> {employee.designation}</p>

        <p><strong>Department :</strong> {employee.department}</p>

        <p><strong>Email :</strong> {employee.email}</p>

        <p><strong>Phone :</strong> {employee.phone}</p>

        <p><strong>Salary :</strong> {employee.salary}</p>

        <p><strong>Location :</strong> {employee.location}</p>

        <h3 style={{ color: "green", textAlign: "center" }}>
          ✅ Login Successful
        </h3>
      </div>
    </div>
  );
}

export default Dashboard;