import { useCallback, useState } from "react";
import Product from "./Product";

function UseCallbackApp() {
  const [cart, setCart] = useState(0);
  const [count, setCount] = useState(0);

  const addToCart = useCallback(() => {
    setCart((cart) => cart + 1);
  }, []);

  return (
    <div>
      <h1>Shopping App--CallBack</h1>

      <h2>Cart: {cart}</h2>

      <Product addToCart={addToCart} />

      <br />

      <button onClick={() => setCount(count + 1)}>
        Other Button: {count}
      </button>
    </div>
  );
}

export default UseCallbackApp;