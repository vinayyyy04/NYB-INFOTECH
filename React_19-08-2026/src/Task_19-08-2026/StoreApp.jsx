import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromCart,
  clearCart
} from "./Store";

function StoreApp() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const products = [
    {
      id: 1,
      name: "MacBook Air",
      price: 89999,
      emoji: "💻",
      category: "Laptop"
    },
    {
      id: 2,
      name: "Sony Headphones",
      price: 12999,
      emoji: "🎧",
      category: "Audio"
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 4999,
      emoji: "⌨️",
      category: "Accessories"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 7999,
      emoji: "⌚",
      category: "Wearable"
    }
  ];

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Shop<span>Easy</span>
        </div>

        <div className="cart-icon">
          🛒
          <span>{totalItems}</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container">

        <section className="hero">
          <div>
            <p className="small-title">
              WELCOME TO SHOPEASY
            </p>

            <h1>
              Everything you need,
              <br />
              <span>in one place.</span>
            </h1>

            <p className="description">
              Browse our products and add your
              favourites to the shopping cart.
            </p>
          </div>
        </section>

        <div className="content">

          {/* Products */}
          <section className="products-section">

            <div className="section-heading">
              <div>
                <h2>Featured Products</h2>
                <p>Choose your favourite products</p>
              </div>
            </div>

            <div className="products-grid">

              {products.map((product) => (
                <div
                  className="product-card"
                  key={product.id}
                >

                  <div className="product-image">
                    {product.emoji}
                  </div>

                  <div className="product-info">

                    <p className="category">
                      {product.category}
                    </p>

                    <h3>{product.name}</h3>

                    <div className="product-bottom">

                      <strong>
                        ₹{product.price.toLocaleString("en-IN")}
                      </strong>

                      <button
                        onClick={() =>
                          dispatch(addToCart(product))
                        }
                      >
                        + Add
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>

          </section>

          {/* Cart */}
          <aside className="cart">

            <div className="cart-header">
              <div>
                <h2>Your Cart</h2>
                <p>{totalItems} items</p>
              </div>

              🛍️
            </div>

            {items.length === 0 ? (

              <div className="empty-cart">
                <div>🛒</div>
                <h3>Your cart is empty</h3>
                <p>
                  Add some products to get started.
                </p>
              </div>

            ) : (

              <>
                <div className="cart-items">

                  {items.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <div className="cart-product">
                        <div className="mini-image">
                          {item.emoji}
                        </div>

                        <div>
                          <h4>{item.name}</h4>
                          <p>
                            ₹{item.price.toLocaleString("en-IN")}
                          </p>
                        </div>
                      </div>

                      <div className="quantity">

                        <button
                          onClick={() =>
                            dispatch(
                              removeFromCart(item.id)
                            )
                          }
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() =>
                            dispatch(
                              addToCart(item)
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="cart-summary">

                  <div>
                    <span>Subtotal</span>
                    <strong>
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <div>
                    <span>Delivery</span>
                    <strong className="free">
                      FREE
                    </strong>
                  </div>

                  <hr />

                  <div className="total">
                    <span>Total</span>
                    <strong>
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </strong>
                  </div>

                  <button className="checkout">
                    Proceed to Checkout
                  </button>

                  <button
                    className="clear"
                    onClick={() =>
                      dispatch(clearCart())
                    }
                  >
                    Clear Cart
                  </button>

                </div>
              </>
            )}

          </aside>

        </div>
      </main>
    </div>
  );
}

export default StoreApp;