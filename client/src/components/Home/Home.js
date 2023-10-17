import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import Item from "./Item";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import TokenContext from "../../context/TokenContext";

export default function Home() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  const navigate = useNavigate();

  const [itensList, setItensList] = useState([]);

  function handleLogout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken("");
    navigate("/");
  }

  function getItens() {
    const header = { headers: { Authorization: `Bearer ${user.token}` } };
    axios.get("https://back-my-wallet-9cf99e7e0077.herokuapp.com/entry", header)
      .then(response => {
        setItensList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getItens();
  }, []);

  return (
    <div className="home">
      <div className="form-title">
        <div>Olá, {user.name}</div>
        <ion-icon name="log-out-outline" onClick={handleLogout}></ion-icon>
      </div>

      {itensList.length > 0 && (
        <div className="registersTable">
          {itensList.map(item =>
            <Item key={item._id} item={item} />
          )}
          <div className="saldo">
            <div className="title">SALDO</div>
            <div className="value">{itensList.reduce((saldo, item) => item.type === 'income' ? saldo + item.value : saldo - item.value, 0).toString().replace(/(\d{2})$/, ",$1")}</div>
          </div>
        </div>
      )}

      {itensList.length === 0 && (
        <div className="registersTable">
          <div className="emptyTable">
            Não há registros de
            <br />
            entrada ou saída
          </div>
        </div>
      )}

      <div className="newRegistrationContainer">
        <Link className="newRegistration" to="/entrada">
          <ion-icon name="add-circle-outline"></ion-icon>
          <div>
            Nova
            <br />
            entrada
          </div>
        </Link>
        <Link className="newRegistration" to="/saida">
          <ion-icon name="remove-circle-outline"></ion-icon>
          <div>
            Nova
            <br />
            saída
          </div>
        </Link>
      </div>

      <div></div>
    </div>
  );
}
