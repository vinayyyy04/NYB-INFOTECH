import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.employee];

    case "REMOVE":
      return state.filter(
        emp => emp.id !== action.id
      );

    default:
      return state;
  }
}

function EmployeeManager() {
  const [employees, dispatch] = useReducer(
    reducer,
    []
  );

  return (
    <button
      onClick={() =>
        dispatch({
          type: "ADD",
          employee: {
            id: 1,
            name: "Rahul"
          }
        })
      }
    >
      Add Employee
    </button>
  );
}

export default EmployeeManager;