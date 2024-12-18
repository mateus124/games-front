import styles from "./Button.module.css";

function Button({ text }) {
  return (
    <div className={styles.button}>
      <input type="submit" value={text} />
    </div>
  );
}

export default Button;
