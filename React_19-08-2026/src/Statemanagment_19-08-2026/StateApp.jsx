import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "./employeeSlice";

function StateApp() {
  const employees = useSelector(
    state => state.employees
  );

  const dispatch = useDispatch();

  return (
    <>
      <h1>Employees: {employees.length}</h1>

      <button
        onClick={() =>
          dispatch(
            addEmployee({
              id: 1,
              name: "Rahul"
            })
          )
        }
      >
        Add Employee
      </button>
    </>
  );
}

export default StateApp;