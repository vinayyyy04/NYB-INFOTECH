import { useReducer } from "react";

const initialState = {
  name: "",
  phone: "",
};

function reducer(state, action) {

  switch (action.type) {

    case "NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "PHONE":
      return {
        ...state,
        phone: action.payload,
      };

    default:
      return state;
  }
}

function Booking() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Book Test Drive</h2>

      <input
        placeholder="Enter Name"
        onChange={(e) =>
          dispatch({
            type: "NAME",
            payload: e.target.value,
          })
        }
      />

      <br /><br />

      <input
        placeholder="Enter Phone"
        onChange={(e) =>
          dispatch({
            type: "PHONE",
            payload: e.target.value,
          })
        }
      />

      <h3>Name : {state.name}</h3>

      <h3>Phone : {state.phone}</h3>
    </>
  );
}

export default Booking;