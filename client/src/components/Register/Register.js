import { useState } from "react";
import "../../styles/form.css";
import CurrencyInput from "react-currency-input-field";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Register({ entryType }) {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
const [entryInfo, setEntryInfo] = useState({ type: entryType });
  const navigate = useNavigate();

  function handleCurrencyValueChange(value) {
    if (typeof value !== 'string') return;

    if(value.includes(","))
      setEntryInfo({ ...entryInfo, value: parseInt(value.replace(",", "")) });
    else
      setEntryInfo({ ...entryInfo, value: parseInt(value)*100 });
  }

  function registerValue() {
    setEntryInfo({ ...entryInfo })

    const header = { headers: { Authorization: `Bearer ${user.token}`} };
    axios.post("http://localhost:5001/entry", entryInfo, header)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
    navigate('/');
  }

  return (
    <div>
      <div className="form-title">
        <div>Nova {entryType === "income" ? "entrada" : "saída"}</div>
        <ion-icon name="arrow-undo" onClick={() => navigate('/')}></ion-icon>
      </div>

      <form onSubmit={registerValue}>
        <CurrencyInput
          id="input-example"
          name="input-name"
          placeholder="Valor"
          prefix="R$ "
          decimalsLimit={2}
          onValueChange={handleCurrencyValueChange}
        ></CurrencyInput>
        <input
          type="text"
          placeholder="Descrição"
          autoComplete="on"
          onChange={(e) =>
            setEntryInfo({ ...entryInfo, description: e.target.value })
          }
        ></input>
        <button type="submit">
          {" "}
          Salvar {entryType === "income" ? "entrada" : "saída"}{" "}
        </button>
      </form>
    </div>
  );
}
