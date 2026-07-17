import { useDispatch } from "react-redux";
import { addCar } from "./WishlistSlice";

function CarList() {

  const dispatch = useDispatch();

  return (
    <>
      <h2>Hundai Creta</h2>

      <button onClick={() => dispatch(addCar())}>
        Add to Wishlist
      </button>

      <br /><br />

      <h2>Thar Roxx</h2>

      <button onClick={() => dispatch(addCar())}>
        Add to Wishlist
      </button>

      <hr />
    </>
  );
}

export default CarList;