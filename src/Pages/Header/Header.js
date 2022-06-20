import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import search from "../../assets/images/search.png";
import user from "../../assets/images/user.png";
import box from "../../assets/images/box.png";
import wallet from "../../assets/images/wallet.png";
import track from "../../assets/images/delivery-truck.png";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <header>
      <div className="top-menu-container">
        <div className="d-flex align-items-center ">
          <img src={track} alt="" />
          <p className="p-0 m-0 ms-2">Free Shipping on Orders Rs. 499</p>
        </div>
        <ul className="menu-top">
          <li>
            <NavLink exact to="blog" className="menu-top-links">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/story" className="menu-top-links">
              Story
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/community" className="menu-top-links">
              Community
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <header
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Contact us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/product"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Products
                </NavLink>
              </li>
            </ul>
            <NavLink exact to="/" className="nav-logo">
              <h1 className="mb-0">Boxoniq</h1>
              <p>Let’s begin to continue</p>
            </NavLink>
            <ul className="sub-menu">
              <li>
                <NavLink
                  exact
                  to="search"
                  activeClassName="active"
                  className="nav-links"
                >
                  <img src={search} alt="" />
                  <span>Search</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/accout"
                  activeClassName="active"
                  className="nav-links"
                >
                  <img src={user} alt="" />
                  <span>Account</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/subscription"
                  activeClassName="active"
                  className="nav-links"
                >
                  <img src={box} alt="" />
                  My Subscription
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  to="/about"
                  activeClassName="wallet"
                  className="nav-links"
                >
                  <img src={wallet} alt="" />
                  Wallet
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              {click ? <AiOutlineCloseSquare /> : <GiHamburgerMenu />}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
