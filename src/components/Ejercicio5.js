// AjaxComponent.js
import React, { useState } from "react";
import "./EjercicioAjax.css";

const AjaxComponent = () => {
  const [url, setUrl] = useState(window.location.href);
  const [contenidos, setContenidos] = useState("");
  const [estados, setEstados] = useState("");
  const [cabeceras, setCabeceras] = useState("");
  const [codigo, setCodigo] = useState("");

  const handleEnviarClick = async () => {
    try {
      const response = await fetch(url);
      const text = await response.text();

      setContenidos(response.ok ? text : "Petición no correcta");
      setEstados(`Estado de la petición: ${response.status}`);
      setCabeceras(`Cabeceras HTTP:\n${response.headers}`);
      setCodigo(
        `Código de estado: ${response.status}\nTexto de estado: ${response.statusText}`
      );
    } catch (error) {
      console.error("Error during fetch:", error);
      setContenidos("Error during fetch");
    }
  };

  return (
    <section>
      <div className="fondo2">
        <h1>LABORATORIO - Ejercicio AJAX</h1>
        <form>
          URL:
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            size="70"
          />
          <input
            type="button"
            value="Mostrar contenidos"
            onClick={handleEnviarClick}
          />
        </form>
        <div>
          <h2>Contenidos del archivo:</h2>
          <div className="con">{contenidos}</div>
          <h2>Estados de la petición:</h2>
          <div className="est">{estados}</div>
          <h2>Cabeceras HTTP de la respuesta del servidor:</h2>
          <div className="cab">{cabeceras}</div>
          <h2>Código de estado:</h2>
          <div className="cod">{codigo}</div>
        </div>
      </div>
    </section>
  );
};

export default AjaxComponent;
