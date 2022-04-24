import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        className={styles.img}
        src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png"
        alt="d"
      />
      <h1 className={styles.name}>Osaco</h1>
      <div className={styles.login}>
        {props.isAuth ? (
          <div>
            <div>{props.login}</div>
            <button onClick={props.logout}>logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}> LOGIN </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
