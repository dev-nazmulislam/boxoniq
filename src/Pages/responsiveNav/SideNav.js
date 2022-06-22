import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";

const SideNav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="nav-hide">
      <nav
        style={{ backgroundColor: "#F9F249" }}
        className="d-flex w-100 justify-content-between align-items-center"
      >
        <NavLink
          to="home"
          smooth="true"
          onClick={() => setActiveNav("#")}
          className={activeNav === "home" ? "active" : ""}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <img
                className="w-100"
                src="https://i.ibb.co/DpgbRg5/home-10-1.png"
                alt=""
              />
            </div>
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink
          to="search"
          smooth="true"
          onClick={() => setActiveNav("about")}
          className={activeNav === "search" ? "active" : ""}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <img
                className="w-100"
                src="https://i.ibb.co/3CjKTCW/search-1.png"
                alt=""
              />
            </div>
            <span>Search</span>
          </div>
        </NavLink>
        <NavLink
          to="subscription"
          smooth="true"
          onClick={() => setActiveNav("skills")}
          className={activeNav === "subscription" ? "active" : ""}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <img
                className="d-block mx-auto w-50"
                src="https://i.ibb.co/9qR9qfk/box-2-1.png"
                alt=""
              />
            </div>
            <span>My Subscription</span>
          </div>
        </NavLink>
        <NavLink
          to="wallet"
          smooth="true"
          onClick={() => setActiveNav("skills")}
          className={activeNav === "wallet" ? "active" : ""}
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="w-100">
              <img
                className="w-100"
                src="https://i.ibb.co/ZB9pGZN/wallet-3-1.png"
                alt=""
              />
            </div>
            <span>Wallet</span>
          </div>
        </NavLink>
      </nav>
    </div>
  );
};

export default SideNav;
