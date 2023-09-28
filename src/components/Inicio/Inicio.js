import { React } from "react";
import "../Inicio/Inicio.css";
import person from "../../assets/img/yo.jpeg";

export const Inicio = () => {
  return (
    <div className="container-banner">
      <div className="container-inner">
        <div className="container-img">
          <img src={person} alt="Icono de responsivo" />
        </div>
        <div className="container-info">
          <h2>¡Hola!</h2>
          <h1>Soy Robert Gabriel</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};
