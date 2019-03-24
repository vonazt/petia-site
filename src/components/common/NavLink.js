import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ section, navClass, fade }) => (
  <Link
    to={`${section === "Home" ? "/" : section.toLowerCase()}`}
    className={`navbar-item ${navClass}`}
  >
    {section}
  </Link>
);

export default NavLink;
