import { useContext } from "react";
import PropTypes from "prop-types";
import { assets } from "../../assets/assets";
import "./food-item.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, image, desc }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-img" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="add"
            className="add"
            onClick={() => {
              addToCart(id);
            }}
          />
        ) : (
          <div className="food-item-counter">
            <img
            onClick={() => {
                removeFromCart(id);
              }}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => {
                addToCart(id);
              }}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="ratings" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
FoodItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default FoodItem;
