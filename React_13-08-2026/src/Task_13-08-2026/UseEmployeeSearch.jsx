import { useMemo, useState } from "react";

function UseEmployeeSearch(employees) {
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.role.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  return {
    search,
    setSearch,
    filteredEmployees
  };
}

export default UseEmployeeSearch;