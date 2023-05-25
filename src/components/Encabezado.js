import React from "react";
import "./Encabezado.css";

export const Encabezado = () => {
  return (
    <div className="container-header">
      <header>
        <div className="logo">
          <ion-icon name="code-working-outline" id="logo-code"></ion-icon>
          <p className="code-p">RG.</p>
        </div>
        <nav id="nav">
          <ul>
            <li>
              <a href="#home">INICIO</a>
            </li>
            <li>
              <a href="#about">SOBRE MI</a>
            </li>
            <li>
              <a href="#skills">HABILIDADES</a>
            </li>
            <li>
              <a href="#services">SERVICIOS</a>
            </li>
            <li>
              <a href="#contac">CONTACTOS</a>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive">
          <i class="fa-solid fa-bars"></i>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </header>
    </div>
  );
};
