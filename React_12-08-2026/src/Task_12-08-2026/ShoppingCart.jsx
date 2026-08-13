import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct } from "./cartSlice";

function ShoppingCart() {
  const products = useSelector(
    (state) => state.cart.items
  );

  const dispatch = useDispatch();

  return (
    <div className="shop">

      <h1>🛒 My Shopping Store</h1>

      <p className="subtitle">
        Select products and add them to your cart
      </p>

      <div className="products">

        <div className="product-card">
          <div className="emoji">📱</div>
          <h2>iPhone</h2>
          <p>₹70,000</p>

          <button
            onClick={() => dispatch(addProduct("iPhone"))}
          >
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <div className="emoji">💻</div>
          <h2>Laptop</h2>
          <p>₹60,000</p>

          <button
            onClick={() => dispatch(addProduct("Laptop"))}
          >
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <div className="emoji">🎧</div>
          <h2>Headphones</h2>
          <p>₹2,000</p>

          <button
            onClick={() => dispatch(addProduct("Headphones"))}
          >
            Add to Cart
          </button>
        </div>

      </div>

      <div className="cart">
        <h2>🛍️ Your Cart</h2>

        {products.length === 0 ? (
          <p className="empty">
            Your cart is empty
          </p>
        ) : (
          products.map((product, index) => (
            <div className="cart-item" key={index}>
              <span>{product}</span>

              <button
                className="remove"
                onClick={() =>
                  dispatch(removeProduct(product))
                }
              >
                Remove
              </button>
            </div>
          ))
        )}

        <h3>
          Total Items: {products.length}
        </h3>
      </div>

    </div>
  );
}

export default ShoppingCart;