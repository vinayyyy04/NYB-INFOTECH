import { useCallback, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import useEmployeeSearch from "./UseEmployeeSearch";

const employees = [
  {
    id: 1,
    name: "Vinay Reddy",
    role: "Frontend Developer",
    department: "Engineering",
    location: "Hyderabad"
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "UI/UX Designer",
    department: "Design",
    location: "Bangalore"
  },
  {
    id: 3,
    name: "Yashwanth",
    role: "Backend Developer",
    department: "Engineering",
    location: "Chennai"
  },
  {
    id: 4,
    name: "Sowmith Raj",
    role: "HR Manager",
    department: "Human Resources",
    location: "Mumbai"
  },
  {
    id: 5,
    name: "Vikram ",
    role: "Data Analyst",
    department: "Analytics",
    location: "Pune"
  },
  {
    id: 6,
    name: "Ananya Rao",
    role: "Project Manager",
    department: "Management",
    location: "Delhi"
  }
];

function EmployeePortalApp() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [notifications, setNotifications] = useState(3);

  const {
    search,
    setSearch,
    filteredEmployees
  } = useEmployeeSearch(employees);

  const selectEmployee = useCallback((employee) => {
    setSelectedEmployee(employee);
  }, []);

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div>
          <h1>EmployeeHub</h1>
          <p>Employee Management Dashboard</p>
        </div>

        <div className="notification">
          🔔
          <span>{notifications}</span>
        </div>
      </header>

      {/* Dashboard Stats */}
      <section className="stats">

        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div>
            <h2>{employees.length}</h2>
            <p>Total Employees</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">💻</div>
          <div>
            <h2>3</h2>
            <p>Engineering</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div>
            <h2>92%</h2>
            <p>Productivity</p>
          </div>
        </div>

      </section>

      {/* Search */}
      <section className="search-section">
        <div>
          <h2>Employee Directory</h2>
          <p>Search employees by name, role or department.</p>
        </div>

        <input
          type="text"
          placeholder="🔍 Search employee..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>

      {/* Employee Cards */}
      <section className="employee-grid">

        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onSelect={selectEmployee}
            />
          ))
        ) : (
          <div className="no-results">
            <h3>No employees found</h3>
            <p>Try searching with another name or department.</p>
          </div>
        )}

      </section>

      {/* Employee Modal */}
      {selectedEmployee && (
        <div className="modal-overlay">

          <div className="modal">

            <button
              className="close-btn"
              onClick={() => setSelectedEmployee(null)}
            >
              ×
            </button>

            <div className="large-avatar">
              {selectedEmployee.name.charAt(0)}
            </div>

            <h2>{selectedEmployee.name}</h2>

            <p className="modal-role">
              {selectedEmployee.role}
            </p>

            <div className="details">

              <div>
                <span>Department</span>
                <strong>{selectedEmployee.department}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{selectedEmployee.location}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong className="active">Active</strong>
              </div>

            </div>

            <button
              className="close-profile"
              onClick={() => setSelectedEmployee(null)}
            >
              Close Profile
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default EmployeePortalApp;