import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form.css";
import logoImage from "../../assets/MyWallet.png";
import axios from "axios";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState({});
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();

    await axios.post("https://back-my-wallet-9cf99e7e0077.herokuapp.com/sign-in", loginInfo)
      .then(response => {
        const user = response.data;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        setToken(user.token);
        localStorage.setItem('token', user.token);
      })
      .catch(error => {
        console.error(error);
        alert("Erro ao fazer login. Insira as informações corretas!");
      }
    );
    
    navigate('/');
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
