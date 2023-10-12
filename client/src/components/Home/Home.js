import { Link } from "react-router-dom";
import "./home.css";
import Item from "./Item";

export default function Home() {
  const user = { name: "Fulaninho" };
  const contItens = 0;

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