import React, { useState } from "react";
import styles from "../styles/rainyWeather.module.css";

const RainyWeather = () => {
  return (
    <div className={styles.rainyContainer}>
      <div className={styles.rainyBackground}>
        <img
          className={styles.rain}
          src="https://wallpapercave.com/wp/wp3146357.jpg"
        />
      </div>

      <div className={styles.rainyText}>Welcome to Rainy Weather</div>
    </div>
  );
};

export default RainyWeather;
