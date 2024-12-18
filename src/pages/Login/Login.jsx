import logo from "../../assets/images/logo.svg";
import Inputbox from "../../components/form/Input/Input";
import Submit from "../../components/form/Button/Button";
import Link from "../../components/utils/Link/Link";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={logo} alt="logo pixel games" />
        <p>É bom ter você aqui de novo.</p>
        <form action="" className={styles.form}>
          <Inputbox
            type="email"
            name="email"
            placeholder="Informe seu e-mail"
            label="E-mail"
          ></Inputbox>
          <Inputbox
            type="password"
            name="pass"
            placeholder="Informe sua senha"
            label="Senha"
          ></Inputbox>
          <Submit text="Entrar"></Submit>
          <Link text="Criar conta" link="/register"></Link>
        </form>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Login;
