import { useContext } from "react";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  return (
    <div className="cart">
      {getTotalCartAmount() === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty!</h2>
          <p>Looks like you haven't added anything yet.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <>
                    <div
                      className="cart-items-title cart-items-item"
                      key={item.name + index}
                    >
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price * cartItems[item._id]}</p>
                      <p
                        className="cross"
                        onClick={() => removeFromCart(item._id)}
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>${2}</p>
                </div>
                <hr />
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount() + 2}</b>
                </div>
              </div>
              <button onClick={() => navigate("/order")}>Proceed to Checkout</button>
            </div>
            <div className="cart-promocode">
              <div>
                <p>If you have any promo code, Enter it here.</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="Promo code" />
                  <button>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
