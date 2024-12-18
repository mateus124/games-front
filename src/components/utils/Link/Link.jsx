import styles from "./Link.module.css";
import { useNavigate } from "react-router-dom";

function Link({ text, link }) {
  const navigate = useNavigate();

  const targetLink = () => {
    navigate(link);
  };

  return (
    <p className={styles.link} onClick={targetLink}>
      {text}
    </p>
  );
}

export default Link;
