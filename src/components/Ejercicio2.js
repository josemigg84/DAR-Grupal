// components/Ejercicio2.js
import React, { useState } from 'react';
import './Ejercicio.css'; 

const Ejercicio2 = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const [res2, setRes2] = useState('');

  const compare = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      setRes2('No son números válidos');
    } else {
      if (num1 > num2) {
        setRes2(`El número mayor es: ${num1}`);
      } else if (num2 > num1) {
        setRes2(`El número mayor es: ${num2}`);
      } else {
        setRes2('Los números son iguales');
      }
    }
  };
  
  return (
    <section>
     <div className='fondo'>
        <h1>LABORATORIO - JavaScript</h1>
        <div className="rectExt">
          <div className="rectInt">
            <h2>Ejercicio 2</h2>
            <p>Escribe un programa que pida dos números y escriba en la pantalla cuál es el mayor:</p>
            <p>Ingrese dos números:</p>
            <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
            <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
            <button onClick={compare}>Verificar</button>
            <div className='resultado'>{res2}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ejercicio2;

