import React from "react";
import "./About.css";
import Button from "@mui/material/Button";
import cv from "../assets/cv/gabriel.pdf";

import html from "../assets/iconos/skills/html.png";
import js from "../assets/iconos/skills/js.png";
import css from "../assets/iconos/skills/css.png";
import git from "../assets/iconos/skills/git.png";
import angular from "../assets/iconos/skills/angular.png";
import react from "../assets/iconos/skills/react.png";

export const About = () => {
  return (
    <section className="container-about">
      <div className="container-div">
        <h1 id="h1">Sobre Mi</h1>
        <h3 id="h3">
          Soy Robert Gabriel, Desarrollador Front End / Ingeniero de Sistemas
        </h3>
        <p id="p">
          Hola, mi nombre es Robert Gabriel y soy un apasionado desarrollador
          front-end con experiencia en desarrollo de sitios web modernos y
          responsivos. Me encanta trabajar en proyectos que desafíen mis
          habilidades y me permitan aprender nuevas tecnologías y herramientas.
        </p>
        <div id="download">
          <a href={cv} download="CV_Robert_Gabriel.pdf">
            <Button variant="contained" id="bt">
              Descargar CV
            </Button>
          </a>
        </div>
      </div>
      <div className="container-icon">
        <h1 className="skills">Mis Habilidades</h1>
        <div className="iconos">
          <div>
            <h3 id="te">HTML</h3>
            <img src={html} id="html-icon" alt="Icono de responsivo"></img>
          </div>
          <div>
            <h3 id="te">CSS</h3>
            <img src={css} id="html-icon" alt="Icono de responsivo"></img>
          </div>
          <div>
            <h3 id="te">JS</h3>
            <img src={js} id="html-icon" alt="Icono de responsivo"></img>
          </div>
          <div>
            <h3 id="te">ANGULAR</h3>
            <img src={angular} id="html-icon" alt="Icono de responsivo"></img>
          </div>
          <div>
            <h3 id="te">REACT</h3>
            <img src={react} id="html-icon" alt="Icono de responsivo"></img>
          </div>
          <div>
            <h3 id="te">GIT</h3>
            <img src={git} id="html-icon" alt="Icono de responsivo"></img>
          </div>
        </div>
      </div>
    </section>
  );
};
