import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [selected, setSelected] = useState("Catalogue");

  const onClickNavBarTag = (tag) => {
    setSelected(tag);
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>BuyBuy</p>
      </div>
      <div className="nav-right">
        <ul className="nav-menu">
          <li className={selected === "Catalogue" ? "selected" : ""} onClick={() => onClickNavBarTag("Catalogue")}>
            <Link to="/" style={{ textDecoration: "none", color: selected === "Catalogue" ? "white" : "inherit" }}>
              Catalogue
            </Link>
          </li>
          <li className={selected === "Fashion" ? "selected" : ""} onClick={() => onClickNavBarTag("Fashion")}>
            <Link
              to="/fashion"
              style={{ textDecoration: "none", color: selected === "Fashion" ? "white" : "inherit" }}
            >
              Fashion
            </Link>
          </li>
          <li className={selected === "Favorite" ? "selected" : ""} onClick={() => onClickNavBarTag("Favorite")}>
            <Link
              to="/favorite"
              style={{ textDecoration: "none", color: selected === "Favorite" ? "white" : "inherit" }}
            >
              Favorite
            </Link>
          </li>
          <li className={selected === "Lifestyle" ? "selected" : ""} onClick={() => onClickNavBarTag("Lifestyle")}>
            <Link
              to="/lifestyle"
              style={{ textDecoration: "none", color: selected === "Lifestyle" ? "white" : "inherit" }}
            >
              Lifestyle
            </Link>
          </li>
        </ul>
        <div className="nav-cart">
          <button>
            <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
              Login
            </Link>
          </button>
          <Link to="/cart">
            <img src={cart_icon}></img>
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};
