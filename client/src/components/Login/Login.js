import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/form.css";
import logoImage from "../../assets/MyWallet.png";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({});

  function loginUser() {
    return;
  }

  return (
    <div className="center-vertically">

      <img src={logoImage} alt="logo" />{" "}

      <form onSubmit={loginUser}>
        <input
          type="email"
          placeholder="E-mail"
          autoComplete="on"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, email: e.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="Senha"
          autoComplete="on"
          onChange={(e) =>
            setLoginInfo({ ...loginInfo, password: e.target.value })
          }
        ></input>
        <button type="submit"> Entrar </button>
        <Link to="/cadastro" className="signupLink">
          Não tem uma conta? Cadastre-se!
        </Link>
      </form>

    </div>
  );
}
