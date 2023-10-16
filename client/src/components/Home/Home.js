import { Link } from "react-router-dom";
import "./home.css";
import Item from "./Item";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  const contItens = 1;

  const [itensList, setItensList] = useState([]);

  function getItens(){
    const header = { headers: { Authorization: `Bearer ${user.token}`} };
    axios.get("http://localhost:5001/entry", header)
      .then(response => {
        console.log(response.data);
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
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
      {contItens > 0 && (
        <div className="registersTable">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <div className="saldo">
            <div className="title">SALDO</div>
            <div className="value">2983,42</div>
          </div>
        </div>
      )}
      {contItens === 0 && (
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
