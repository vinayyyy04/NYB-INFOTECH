import React from "react";

class Employee extends React.PureComponent {
  render() {
    console.log("Employee Component Rendered");

    return (
      <div>
        <h2>Employee Details</h2>

        <p>Employee ID: {this.props.empId}</p>

        <p>Name: {this.props.name}</p>

        <p>Department: {this.props.department}</p>
      </div>
    );
  }
}

export default Employee;