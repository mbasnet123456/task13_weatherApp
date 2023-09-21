import styles from "./winter.module.css";
import { useState } from "react";
function Winter() {
  const [mode, setmode] = useState(true);
  return (
    <div className={styles.winter}>
      <h1>Welcome to Winter</h1>
      <p>Winter is the coldest season.</p>
      <img
        className={styles.img}
        src="https://images.squarespace-cdn.com/content/v1/57efb57c1b631b0bd90296d2/1651764016683-BRAGBTIXSLX5LVE0E7KH/mountain-top.jpg?format=2500w"
      />
      <div className={mode ? styles.light : styles.dark}>
        <button onClick={() => setmode(!mode)} className={styles.modeIcon}>
          {mode ? "☀" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default Winter;
