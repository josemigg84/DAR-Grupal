// components/Home.js
import React from "react";
import "./Ejercicio.css";

const Home = () => {
  return (
    <section className="fondo">
      <div>
        <h2>Objetivos</h2>
        <p>
          El objetivo principal de esta actividad es poner en práctica los
          conocimientos sobre el diseño de sistemas basados en componentes junto
          con las tecnologías de desarrollo web.
        </p>
        <h2>Descripción de la actividad</h2>
        <p>
          Se deberá recrear un sitio web basado en componentes que tenga como
          mínimo:
        </p>
        <ul>
          <li>▸ Funcionalidad e interacción con el usuario.</li>
          <li>▸ Interfaz gráfica.</li>
          <li>▸ Usabilidad.</li>
        </ul>
        <h2>Resolución</h2>
        <p>
          Para la resolución de este ejercicio, se ha optado por utilizar el
          framework React, y reutilizar los ejercicios del laboratorio anterior
          para crear esta Web basada en componentes.{" "}
        </p>
      </div>
    </section>
  );
};

export default Home;
