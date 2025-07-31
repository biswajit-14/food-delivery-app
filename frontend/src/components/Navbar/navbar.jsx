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

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="tomato_logo" className="logo" />
      </Link>

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
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
