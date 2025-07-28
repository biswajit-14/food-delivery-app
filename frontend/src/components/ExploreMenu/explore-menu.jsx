import "./explore-menu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable dishes. Our mission is
        to satisfy your cravings and elevate your dinning experience, one
        delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((menuItem, i) => (
          <div
            className="explore-menu-list-item"
            key={`${menuItem + -+i}`}
            onClick={() => {
              setCategory((prev) =>
                prev === menuItem.menu_name ? "All" : menuItem.menu_name
              );
            }}
          >
            <img
              className={category === menuItem.menu_name ? "active" : ""}
              src={menuItem.menu_image}
              alt={menuItem.menu_name}
            />
            <p>{menuItem.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
