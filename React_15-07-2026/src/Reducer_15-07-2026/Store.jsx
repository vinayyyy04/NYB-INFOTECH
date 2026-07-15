import { useReducer } from "react";
import { reducer, initialState } from "./Reducer.jsx";

function Store() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (

    <div>

      <h1>Shopping Cart</h1>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: 1,
              name: "Laptop"
            }
          })
        }
      >
        Add Laptop
      </button>
      <br></br>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: 2,
              name: "Phone"
            }
          })
        }
      >
        Add Phone
      </button>
      <br></br>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: 1
          })
        }
      >
        Remove Laptop
      </button>
      <br></br>

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_CART"
          })
        }
      >
        Clear Cart
      </button>

      <h2>Items</h2>

      {
        state.cart.map((item) => (
          <p key={item.id}>
            {item.name}
          </p>
        ))
      }

    </div>

  );
}

export default Store;