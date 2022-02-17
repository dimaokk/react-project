import React from "react";
import styles from "./Preloader.module.css";
import load from "../../../assets/loading-buffering.gif";
export const Preloader = () => {
  return (
    <div className={styles.cont}>
      <img src={load} />
    </div>
  );
};
