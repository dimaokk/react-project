/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import navClass from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={navClass.navbar}>
      <div className={navClass.item}>
        <NavLink to="/profile" activeClassName={navClass.active}>
          Profile
        </NavLink>
      </div>
      <div className={navClass.item}>
        <NavLink to="/dialogs" activeClassName={navClass.active}>
          Massege
        </NavLink>
      </div>
      <div className={navClass.item}>
        <NavLink to="/news" activeClassName={navClass.active}>
          News
        </NavLink>
      </div>
      <div className={navClass.item}>
        <NavLink to="/music" activeClassName={navClass.active}>
          Music
        </NavLink>
      </div>
      <div className={navClass.item}>
        <NavLink to="/settings" activeClassName={navClass.active}>
          Settings
        </NavLink>
      </div>
      <div className={navClass.item}>
        <NavLink to="/friends" activeClassName={navClass.active}>
          Friends
        </NavLink>
      </div>
      <div className={navClass.item}>
        <NavLink to="/users" activeClassName={navClass.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
