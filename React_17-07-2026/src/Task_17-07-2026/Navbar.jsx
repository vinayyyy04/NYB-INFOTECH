import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div style={{ background: "black", color: "white", padding: "15px" }}>
      <h2> Food Menu</h2>
      <h3>Cart Items: {cart.length}</h3>
    </div>
  );
}

export default Navbar;