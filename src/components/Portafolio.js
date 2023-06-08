import React from "react";
import "../components/Portafolio.css";
import t1 from "../assets/img/t1.png";
import Button from "@mui/material/Button";
export const Portafolio = () => {
  return (
    <section className="container-portafolio">
      <div className="mar-service">
        <div className="container-obejtivo">
          <h1>Portafolio</h1>
          <p>Aquí puedes ver los proyectos en los que he trabajado.</p>
        </div>

        <div className="iconos-portafolio">
          <div className="portafolio-div">
            <div className="image-container">
              <img src={t1} id="img-t1" alt="Icono de responsivo"></img>
              <div class="button-container">
                <p>Landing Pages React: Empresa Minera Huanuni</p>

                <div className="botones-portafolio">
                  <a
                    href="https://r-gabriel-f.github.io/empresa_minera_huanuni/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" id="bp">
                      Sitio Web
                    </Button>
                  </a>
                  <a
                    href="https://github.com/r-gabriel-f/empresa_minera_huanuni"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" id="bp">
                    Repositorio
                    </Button>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
