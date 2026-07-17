import { useReducer } from "react";

const initialState = {
  name: "",
  address: "",
  phone: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };

    case "SET_ADDRESS":
      return { ...state, address: action.payload };

    case "SET_PHONE":
      return { ...state, phone: action.payload };

    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        placeholder="Enter Name"
        onChange={(e) =>
          dispatch({
            type: "SET_NAME",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="Enter Address"
        onChange={(e) =>
          dispatch({
            type: "SET_ADDRESS",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="Enter Phone"
        onChange={(e) =>
          dispatch({
            type: "SET_PHONE",
            payload: e.target.value,
          })
        }
      />

      <h3>Name : {state.name}</h3>
      <h3>Address : {state.address}</h3>
      <h3>Phone : {state.phone}</h3>
    </div>
  );
}

export default UseReducer;