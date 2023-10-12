import { useState } from "react";
import "../../styles/form.css";
import CurrencyInput from "react-currency-input-field";

export default function Register({ entryType }) {
  const [incomeInfo, setIncomeInfo] = useState({ type: entryType });

  function registerValue() {
    return;
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
          onValueChange={(value) => {
            const stringInt = value.replace(",", "");
            setIncomeInfo({ ...incomeInfo, valor: parseInt(stringInt) });
          }}
        ></CurrencyInput>
        <input
          type="text"
          placeholder="Descrição"
          autoComplete="on"
          onChange={(e) =>
            setIncomeInfo({ ...incomeInfo, description: e.target.value })
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
