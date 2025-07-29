import "./navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { key: "home", label: "home" },
  { key: "menu", label: "menu" },
  { key: "mobile-app", label: "mobile-app" },
  { key: "contact-us", label: "contact us" },
];

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="tomato_logo" className="logo" />

      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <li
            key={item.key}
            onClick={() => setMenu(item.key)}
            className={menu === item.key ? "active" : ""}
          >
            {item.key === "home" ? (
              <Link to="/">home</Link>
            ) : (
              <a href={`#${item.key}`}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="cart" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
