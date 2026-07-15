import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";

function EmployeeForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Employee Registration</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={state.name}
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            payload: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Enter Email"
        value={state.email}
        onChange={(e) =>
          dispatch({
            type: "SET_EMAIL",
            payload: e.target.value,
          })
        }
      />

      <br />
      <br />

      <button onClick={() => dispatch({ type: "RESET" })}>
        Clear Form
      </button>

      <hr />

      <h3>Name : {state.name}</h3>
      <h3>Email : {state.email}</h3>
    </div>
  );
}

export default EmployeeForm;