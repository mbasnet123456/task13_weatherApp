import styles from "../styles/winter.module.css";
function Winter() {
  return (
    <div className={styles.winter}>
      <h1>Welcome to Winter</h1>
      <p>Winter is the coldest season.</p>
      <img
        className={styles.img}
        src="https://images.squarespace-cdn.com/content/v1/57efb57c1b631b0bd90296d2/1651764016683-BRAGBTIXSLX5LVE0E7KH/mountain-top.jpg?format=2500w"
      />
    </div>
  );
}

export default Winter;
