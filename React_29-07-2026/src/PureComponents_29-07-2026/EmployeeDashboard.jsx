import React from "react";
import Employee from "./Employee";

class EmployeeDashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      visitors: 0,
    };
  }

  increaseVisitors = () => {
    this.setState({
      visitors: this.state.visitors + 1,
    });
  };

  render() {
    console.log("App Component Rendered");

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Employee Dashboard</h1>

        <h2>Visitors: {this.state.visitors}</h2>

        <button onClick={this.increaseVisitors}>
          Increase Visitors
        </button>

        <hr />

        <Employee
          empId="EMP109"
          name="Vinay"
        department="FRONT-END"
        />
      </div>
    );
  }
}

export default EmployeeDashboard;