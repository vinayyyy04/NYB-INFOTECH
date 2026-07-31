import { useState } from "react";

function UseCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = () => {
    setCart(cart.slice(0, -1));
  };

  return { cart, addItem, removeItem };
}

export default UseCart;