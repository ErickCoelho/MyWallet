import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/form.css";
import logoImage from "../../assets/MyWallet.png";
import axios from "axios";
import TokenContext from "../../context/TokenContext";
import UserContext from "../../context/UserContext";


export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({});
  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function createUser(e) {
    e.preventDefault();
    
    await axios.post("https://back-my-wallet-9cf99e7e0077.herokuapp.com/sign-up", signUpInfo)
      .then(response => {
        const user = response.data;
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        setToken(user.token);
        localStorage.setItem('token', user.token);
      })
      .catch(error => {
        console.error(error);
      }
    );

    navigate('/');
  }

  return (
    <div className="center-vertically">

      <img src={logoImage} alt="logo" />{" "}

      <form onSubmit={createUser}>
        <input
          type="text"
          placeholder="Nome"
          autoComplete="on"
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, name: e.target.value })
          }
        ></input>
        <input
          type="email"
          placeholder="E-mail"
          autoComplete="on"
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, email: e.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="Senha"
          autoComplete="on"
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, password: e.target.value })
          }
        ></input>
        <input
          type="password"
          placeholder="Confirme a senha"
          autoComplete="on"
          onChange={(e) =>
            setSignUpInfo({ ...signUpInfo, password: e.target.value })
          }
        ></input>
        <button type="submit"> Cadastrar-se </button>
        <Link to="/" className="signupLink">
          Já criou sua conta? Faça o Login!
        </Link>
      </form>
      
    </div>
  );
}
