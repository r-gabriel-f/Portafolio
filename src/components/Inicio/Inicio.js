import { React } from "react";
import "../Inicio/Inicio.css";
import person from "../../assets/img/yo.webp";

export const Inicio = () => {
  return (
    <div className="container-banner">
      <div className="container-inner">
        <div className="container-img">
          <img src={person} alt="Icono de responsivo" />
        </div>
        <div className="container-info">
          <h1>¡Hola!</h1>
          <h2>Soy Robert Gabriel</h2>
          <h1>Frontend Developer</h1>
        </div>
      </div>
    </div>
  );
};
