import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/form.css";
import logoImage from "../../assets/MyWallet.png";
import axios from "axios";


export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({});

  function createUser(e) {

    console.log(signUpInfo);
    e.preventDefault();
    
    axios.post("http://localhost:5001/sign-up", signUpInfo);
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
        <button type="submit"> Entrar </button>
        <Link to="/" className="signupLink">
          Já criou sua conta? Faça o Login!
        </Link>
      </form>
      
    </div>
  );
}
