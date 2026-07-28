import { addEmployee } from "./employeeService";

function AddEmployee() {

  const saveEmployee = async () => {

    const employee = {
      name: "Rahul",
      email: "rahul@gmail.com",
    };

    const result = await addEmployee(employee);

    console.log(result);
  };

  return (
    <button onClick={saveEmployee}>
      Add Employee
    </button>
  );
}

export default AddEmployee;