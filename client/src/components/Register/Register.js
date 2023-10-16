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
    const header = { headers: { Authorization: `Bearer ${user.token}`} };
    alert(JSON.stringify(header)); //{"headers":{"Authorization":"Bearer 9686833b-7351-4686-8f0d-d159c241a8ee"}}
    alert(JSON.stringify(entryInfo));  //{"type":"income","valor":37200,"description":"entryyy"}
    axios.post("http://localhost:5001/entry", entryInfo, header)
    .then(response => {
      console.log(response.data);
      alert("then");
      navigate('/home');
    })
    .catch(error => {
      console.error(error);
      alert("catch");
    });
  }

  return (
    <div>
      <div className="form-title">
        Nova {entryType === "income" ? "entrada" : "saída"}
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
