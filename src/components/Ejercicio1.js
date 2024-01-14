// components/Ejercicio1.js
import React, { useState } from 'react';
import './Ejercicio.css'; 

const Ejercicio1 = () => {
  const [palindromoInput, setPalindromoInput] = useState('');
  const [res1, setRes1] = useState('');

  const verify = () => {
    const textoEntrada = palindromoInput.toLowerCase();
    const textoInvertido = textoEntrada.split('').reverse().join('');

    if (textoEntrada === '') {
      setRes1('');
    } else if (textoEntrada === textoInvertido) {
      setRes1('Es un palíndromo');
    } else {
      setRes1('No es un palíndromo');
    }
  };

  return (
    <section>
      <div className='fondo'>
        <h1>LABORATORIO - JavaScript</h1>
        <div className="rectExt">
          <div className="rectInt">
            <h2>Ejercicio 1</h2>
            <p>Detectar si la cadena de entrada es un palíndromo:</p>
            <input type="text" value={palindromoInput} onChange={(e) => setPalindromoInput(e.target.value)} />
            <button onClick={verify}>Verificar</button>
            <div className='resultado'>{res1}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ejercicio1;

