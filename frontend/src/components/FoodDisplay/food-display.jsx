import { useContext } from "react";
import "./food-display.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/food-item";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, i) => (
          <FoodItem
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            key={`${item + -+i}`}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
