import React from "react";
import styles from "./Preloader.module.css";
import load from "../../../assets/loading-buffering.gif";
export const Preloader = () => {
  return (
    // eslint-disable-next-line
    <div className={styles.cont}>
      <img src={load} alt="sa" />
    </div>
  );
};
