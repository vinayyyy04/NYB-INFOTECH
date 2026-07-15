import { useReducer } from "react";
import { reducer, initialState } from "./Reducer";


function ShowRoom() {

const [state, dispatch] = useReducer(
    reducer,
    initialState
);

  return (
<>
<h1>My Car Showroom</h1>
<button
  onClick={() =>
    dispatch({
      type: "ADD_CAR",
      payload: {
        id: 7,
        name: "Mahindra Thar",
        color: "Black",
        price: "17 Lakhs",
      },
    })
  }
>
 Add Thar
</button>
<br></br>

<button
  onClick={() =>
    dispatch({
      type: "ADD_CAR",
      payload: {
        id: 8,
        name: "BMW M4 competion",
        color: "Blue",
        price: "2.2 crore",
      },
    })
  }
>
 Add BMW 
</button>
<br></br>

<button
  onClick={() =>
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        id: 4,
        price: "₹3.95 Lakhs",
      },
    })
  }
>
 THAR ROXX Discount
</button>
<br></br>

<button
  onClick={() =>
    dispatch({
      type: "SELL_CAR",
      payload: 2,
    })
  }
>
 Sell Kia Seltos
</button>
<br></br>

<button
  onClick={() =>
    dispatch({
      type: "CLEAR_SHOWROOM",
    })
  }
>
 Clear Showroom
</button>

<hr />

      <h2>Available Cars</h2>

      {state.cars.length === 0 ? (
        <h3>No Cars Available 🚫</h3>
      ) : (
        state.cars.map((car) => (
          <div
            key={car.id}>
            <h3>{car.name}</h3>

            <p>
              <strong>Color:</strong> {car.color}
            </p>

            <p>
              <strong>Price:</strong> {car.price}
            </p>
          </div>
        ))
      )}
</>

);
}

export default ShowRoom;