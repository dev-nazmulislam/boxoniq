import React from "react";
import { NavLink } from "react-bootstrap";

const MenuItems = () => {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/about">About Me</NavLink>
    </>
  );
};

export default MenuItems;
