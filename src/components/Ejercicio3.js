// components/Ejercicio3.js
import React, { useState } from 'react';
import './Ejercicio.css'; 

const Ejercicio3 = () => {
  const [vowelsInput, setVowelsInput] = useState('');

  const [res3, setRes3] = useState('');

  const showVowels = () => {
    const frase = vowelsInput.toLowerCase();
    const fraseSinAcentos = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const vocales = /[a,e,i,o,u]/g;
    const salida = fraseSinAcentos.match(vocales);
    const salidaNoDuplicada = new Set(salida);

    if (salidaNoDuplicada) {
      setRes3(`Vocales presentes: ${Array.from(salidaNoDuplicada).join(", ")}`);
    } else {
      setRes3('No se encontraron vocales');
    }
  };

  return (
    <section>
    <div className='fondo'>
      <h1>LABORATORIO - JavaScript</h1>
      <div className="rectExt">
        <div className="rectInt">
          <h2>Ejercicio 3</h2>
          <p>Escribe un programa que pida una frase y escriba las vocales que aparecen:</p>
          <p>Ingrese una frase:</p>
          <input type="text" value={vowelsInput} onChange={(e) => setVowelsInput(e.target.value)} />
          <button onClick={showVowels}>Verificar</button>
          <div className='resultado'>{res3}</div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Ejercicio3;


