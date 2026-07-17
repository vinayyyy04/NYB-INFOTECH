import { useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "./UserContext";

function NavBar() {

  const user = useContext(UserContext);

  const cars = useSelector((state) => state?.wishlist?.cars ?? 0);

  return (
    <>
      <h2>My Car Garage</h2>

      <h3>Welcome {user}</h3>

      <h3>Wishlist : {cars}</h3>

      <hr />
    </>
  );
}

export default NavBar;