import { useState, useEffect } from "react";
import Student from "./Employee";
import withLoading from "./withLoading";

const StudentWithLoading = withLoading(Student);

function EmployeeDetails() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    // Simulating API Call
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, []);

  return (
    <StudentWithLoading loading={loading} />
  );
}

export default EmployeeDetails;