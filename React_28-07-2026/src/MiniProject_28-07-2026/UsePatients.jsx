import { useState, useEffect } from "react";

function UsePatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
        setLoading(false);
      });
  }, []);

  return { patients, loading };
}

export default UsePatients;