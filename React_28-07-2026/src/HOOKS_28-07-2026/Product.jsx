import useCart from "./UseCart";

function Product() {
  const { cart, addItem } = useCart();

  return (
    <>
      <h2>Products</h2>

      <button onClick={() => addItem("Laptop")}>
        Add Laptop
      </button>

      <p>Items in Cart: {cart.length}</p>
    </>
  );
}

export default Product;