// components/Ejercicio4.js
import React, { useState } from 'react';
import './Ejercicio.css'; 

const Ejercicio4 = () => {

  const [countingVowelsInput, setCountingVowelsInput] = useState('');

  const [res4, setRes4] = useState('');

  const countVowels = () => {
    const frase = countingVowelsInput.toLowerCase();
    const fraseSinAcentos = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const comprobar = "aeiou";
    const contadorVocales = {
      'a': 0,
      'e': 0,
      'i': 0,
      'o': 0,
      'u': 0
    };

    for (let i = 0; i < fraseSinAcentos.length; i++) {
      const caracter = fraseSinAcentos[i];
      if (comprobar.includes(caracter)) {
        contadorVocales[caracter]++;
      }
    }

    let salida = '';
    for (const vocal in contadorVocales) {
      salida += `${vocal}: ${contadorVocales[vocal]}, `;
    }
    salida = salida.slice(0, -2);

    setRes4(salida);
  };

  return (
    <section>
    <div className='fondo'>
      <h1>LABORATORIO - JavaScript</h1>
      <div className="rectExt">
        <div className="rectInt">
          <h2>Ejercicio 4</h2>
          <p>Escribe un programa que pida una frase y escriba cuántas veces aparece cada vocal</p>
          <p>Ingrese una frase:</p>
          <input type="text" value={countingVowelsInput} onChange={(e) => setCountingVowelsInput(e.target.value)} />
          <button onClick={countVowels}>Verificar</button>
          <div className='resultado'>{res4}</div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Ejercicio4;




