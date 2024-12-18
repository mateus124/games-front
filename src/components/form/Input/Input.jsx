import styles from "./Input.module.css";

function Input({ type, placeholder, name, label }) {
  return (
    <div className={styles.inputBox}>
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} name={name} />
    </div>
  );
}

export default Input;
