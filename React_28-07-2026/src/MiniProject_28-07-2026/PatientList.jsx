import React from "react";

function PatientList({ patients }) {
  return (
    <div className="container">
      <h1 className="title">Hospital Management System</h1>

      {patients.map((patient) => (
        <React.Fragment key={patient.id}>
          <div className="patient-card">
            <h3>{patient.name}</h3>
            <p>
              <strong>Email:</strong> {patient.email}
            </p>
            <p>
              <strong>Phone:</strong> {patient.phone}
            </p>
            <p>
              <strong>City:</strong> {patient.address.city}
            </p>

            <hr />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default PatientList;