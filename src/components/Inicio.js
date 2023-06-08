import {React,useEffect} from "react";
import "./Inicio.css";
import person from "../assets/img/yo.jpg";
import code from "../assets/img/codigo.jpg";





export const Inicio = () => {
  
  return (
    <section id="inicio" className="inicio">
      <div className="container-banner">
        <div className="container-img">
          <img src={person} href />
        </div>
        <div className="container-info">
          <h2>Hola</h2>
          <h1>Soy Robert Gabriel</h1>
          <h2>Desarrollador Front End</h2>
        </div>
        <div className="container-img-codi">
          <img src={code} href />
        </div>
      </div>
      
    </section>
    
  );
};
