import React, { useState } from 'react';
import './App.css';

function App() {
  const [salario, setsalario] = useState('');
  const [impuesto, setimpuesto] = useState(0);
  const [bono, setbono] = useState(0);
  const [netsalario, setNetsalario] = useState('');
  const [error, setError] = useState('');

  const calculatesalario = () => {
    const parsedsalario = parseFloat(salario);

    if (isNaN(parsedsalario) || salario.length < 5) {
      setError('Por favor ingresa un número válido de al menos 5 dígitos.');
      return;
    } else {
      setError('');
    }

    const calculatedimpuesto = parsedsalario * 0.12;

    const calculatedbono = parsedsalario * 0.1;

    const calculatedNetsalario = parsedsalario - calculatedimpuesto + calculatedbono;

    setimpuesto(calculatedimpuesto);
    setbono(calculatedbono);
    setNetsalario(calculatedNetsalario.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Calculador De Salario</h1>
      <label>
        Ingresa el salario: Q
        <input type="number" value={salario} onChange={(e) => setsalario(e.target.value)} onKeyUp={calculatesalario} />
      </label>
      {error && <p className="error">{error}</p>}
      {netsalario !== '' && !error && (
        <div>
          <p>Impuesto: Q{impuesto.toFixed(2)}</p>
          <p>Bono: Q{bono.toFixed(2)}</p>
          <p>Salario Neto: Q{netsalario}</p>
        </div>
      )}
    </div>
  );
}

export default App;