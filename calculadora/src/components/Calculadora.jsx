import React, { useState } from "react";
import "./Calculadora.css";

const Calculadora = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Ingrese números reales");
      return;
    }

    switch (operation) {
      case "suma":
        setResult(number1 + number2);
        break;
      case "resta":
        setResult(number1 - number2);
        break;
      case "multiplicacion":
        setResult(number1 * number2);
        break;
      case "division":
        setResult(number2 !== 0 ? number1 / number2 : "no se puede dividir el 0");
        break;
      default:
        setResult(null);
    }
  };

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="calculadura-container">
      <h2 className="calculadora-titulo">Calculadora</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        className="calculadora-input"
        placeholder=""
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        className="calculadora-input"
        placeholder=""
      />
      <div className="calculadora-button">
        <button onClick={() => handleCalculation("suma")} className="btn btn-suma">+</button>
        <button onClick={() => handleCalculation("resta")} className="btn btn-resta">-</button>
        <button onClick={() => handleCalculation("multiplicacion")} className="btn btn-multiplicacion">×</button>
        <button onClick={() => handleCalculation("division")} className="btn btn-division">÷</button>
      </div>
      <button onClick={handleClear} className="btn btn-clear">Limpiar</button>
      {result !== null && (
        <div className="calculadora-resultado">
          <p>Resultado: {result}</p>
        </div>
      )}
    </div>
  );
}

export default Calculadora;
