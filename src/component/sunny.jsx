import React from "react";
import styles from "../styles/sunny.module.css";

function Sunny() {
  // const handleSunnyButtonClick = () => {
  //   setWeatherCondition("sunny");

  return (
    <div className={styles.sunnyDay}>
      <div className={styles.sun}></div>
      <div className={styles.sky}></div>
      <h1>It's a Sunny Day!</h1>
    </div>
  );
}

export default Sunny;
