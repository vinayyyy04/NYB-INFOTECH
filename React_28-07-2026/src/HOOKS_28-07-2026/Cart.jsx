import useCart from "./UseCart";

function Cart() {
  const { cart, removeItem } = useCart();

  return (
    <>
      <h2>Shopping Cart</h2>

      <button onClick={removeItem}>
        Remove Item
      </button>

      <p>Items in Cart: {cart.length}</p>
    </>
  );
}

export default Cart;