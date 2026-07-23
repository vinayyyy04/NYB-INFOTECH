import { useState } from "react";

function EmployeeLoginForm() {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    department: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#4f81cb",
    },
    form: {
      width: "380px",
      backgroundColor: "#080101",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#fefcfc",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginTop: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "15px",
      boxSizing: "border-box",
    },
    error: {
      color: "red",
      fontSize: "13px",
      marginTop: "3px",
      minHeight: "18px",
    },
    button: {
      width: "100%",
      padding: "10px",
      marginTop: "20px",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  // Single Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Form Validation
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formData.employeeId.trim() === "")
      newErrors.employeeId = "Employee ID is required";

    if (formData.name.trim() === "")
      newErrors.name = "Employee Name is required";

    if (formData.email.trim() === "")
      newErrors.email = "Company Email is required";

    if (formData.department === "")
      newErrors.department = "Please select a department";

    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Employee Registered Successfully!");

      setFormData({
        employeeId: "",
        name: "",
        email: "",
        department: "",
        password: "",
      });
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.heading}>Employee Registration</h2>

        <input
          style={styles.input}
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
        />
        <div style={styles.error}>{errors.employeeId}</div>

        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />
        <div style={styles.error}>{errors.name}</div>

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Company Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div style={styles.error}>{errors.email}</div>

        <select
          style={styles.input}
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="IT">Front End Developer</option>
          <option value="HR">HR</option>
          <option value="Finance">Manager</option>
          <option value="Testing">Admin</option>
        </select>
        <div style={styles.error}>{errors.department}</div>

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <div style={styles.error}>{errors.password}</div>

        <button style={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default EmployeeLoginForm;