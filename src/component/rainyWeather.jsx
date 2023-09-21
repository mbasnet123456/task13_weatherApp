import React, { useState } from "react";
import styles from "../styles/rainyWeather.module.css";

const RainyWeather = () => {
  return (
    <div className={styles.rainyContainer}>
      <div
        className={styles.rainyBackground}
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/9142345.gif')",
        }}
      ></div>

      <div className={styles.rainyText}>Welcome to Rainy Weather</div>
    </div>
  );
};

export default RainyWeather;
