import { React } from "react";
import "../Inicio/Inicio.css";
import person from "../../assets/img/yo.webp";
import code from "../../assets/img/codigo.webp";

export const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
      <div className="container-banner">
        <div className="container-img">
          <img src={person} alt="Icono de responsivo" />
        </div>
        <div className="container-info">
          <h2>Hola</h2>
          <h1>Soy Robert Gabriel</h1>
          <h2>Desarrollador Front End</h2>
        </div>
        <div className="container-img-codi">
          <img src={code} alt="Icono de responsivo" />
        </div>
      </div>
    </section>
  );
};
