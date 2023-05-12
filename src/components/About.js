import React from "react";
import "./About.css";
import Button from "@mui/material/Button";
import cv from "../assets/cv/gabriel.pdf";

export const About = () => {
  return (
    <section className="container-about">
      <div className="container-div">
        <h1 id="h1">Sobre Mi</h1>
        <h3 id="h3">
          Soy Robert Gabriel, Desarrollador Web/ Ingeniero de Sistemas
        </h3>
        <p id="p">
          Hola, mi nombre es Robert Gabriel y soy un apasionado desarrollador
          front-end con experiencia en desarrollo de sitios web modernos y
          responsivos. Me encanta trabajar en proyectos que desafíen mis
          habilidades y me permitan aprender nuevas tecnologías y herramientas.
        </p>
        <div id="download">
          <a href={cv} download="Robert_Gabriel_CV.pdf">
            <Button variant="contained">Descargar CV</Button>
          </a>
        </div>
      </div>
      <div className="container-icon">
        <h1>Mis Habilidades</h1>
        <div className="iconos">
          <div>
            <h3>HTML</h3>
            <ion-icon name="logo-html5" id="html-icon"></ion-icon>
          </div>
          <div>
            <h3>CSS</h3>
            <ion-icon name="logo-css3" id="css-icon"></ion-icon>
          </div>
          <div>
            <h3>JS</h3>
            <ion-icon name="logo-nodejs" id="js-icon"></ion-icon>
          </div>
          <div>
            <h3>ANGULAR</h3>
            <ion-icon name="logo-angular" id="angular-icon"></ion-icon>
          </div>
          <div>
            <h3>REACT</h3>
            <ion-icon name="logo-react" id="react-icon"></ion-icon>
          </div>
          <div>
            <h3>GITHUB</h3>
            <ion-icon name="logo-github" id="react-icon"></ion-icon>
          </div>
        </div>
      </div>
    </section>
  );
};
