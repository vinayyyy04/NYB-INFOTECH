import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Shopping Cart</h1>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: 1,
              name: "Laptop",
            },
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "ADD_ITEM",
            payload: {
              id: 2,
              name: "Headphones",
            },
          })
        }
      >
        Add Headphones
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM",
            payload: 1,
          })
        }
      >
        Remove Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_CART",
          })
        }
      >
        Clear Cart
      </button>

      <hr />

      {state.cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;