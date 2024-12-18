import logo from "../../../assets/images/logo.svg";
import profilepic from "../../../assets/images/perfil.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="logotipo" />
      </div>
      <div className={styles.profile}>
        <div>
          <img src={profilepic} alt="foto de perfil" />
        </div>
        <p>José da Silva</p>
      </div>
    </header>
  );
}

export default Header;
