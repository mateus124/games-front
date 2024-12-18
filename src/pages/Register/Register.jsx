import logo from "../../assets/images/logo.svg";
import Inputbox from "../../components/form/Input/Input";
import Submit from "../../components/form/Button/Button";
import Link from "../../components/utils/Link/Link";
import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img src={logo} alt="Logotipo" />
        <form className={styles.form}>
          <Inputbox
            type="text"
            name="name"
            placeholder="Insira seu nome"
            label="Nome"
          ></Inputbox>
          <Inputbox
            type="email"
            name="email"
            placeholder="Insira um e-mail"
            label="E-mail"
          ></Inputbox>
          <Inputbox
            type="password"
            name="pass"
            placeholder="Insira uma senha"
            label="Senha"
          ></Inputbox>
          <Inputbox
            type="password"
            name="passconfirm"
            placeholder="Confirme a senha"
            label="Confirmar senha"
          ></Inputbox>
          <Submit text="Registrar"></Submit>
          <Link text="Já tenho conta" link="/login"></Link>
        </form>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Register;
