import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux_14-07-2026/CartSlice.jsx";

function Menu() {
  const dispatch = useDispatch();

const state = useSelector((state) => state);

console.log(state);

const items = state.cart?.items || [];

  return (
    <>
      <button onClick={() => dispatch(addItem("Burger"))}>
        Add Burger
      </button>

      {items.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </>
  );
}

export default Menu;