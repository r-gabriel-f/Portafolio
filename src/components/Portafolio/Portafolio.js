import React from "react";
import "../Portafolio/Portafolio.css";
import t1 from "../../assets/img/t1.webp";
import t2 from "../../assets/img/t2.webp";
import t3 from "../../assets/img/t3.webp";
import t4 from "../../assets/img/t4.webp";
import t5 from "../../assets/img/t5.webp";
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
              <p>Landing Pages React: E.M.H</p>
              <img src={t1} id="img-t1" alt="Icono de responsivo"></img>
              <div className="button-container">
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
            <div className="image-container">
              <p>Country Api React</p>

              <img src={t2} id="img-t1" alt="Icono de responsivo"></img>
              <div className="button-container">
                <div className="botones-portafolio">
                  <a
                    href="https://r-gabriel-f.github.io/country_api_react/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" id="bp">
                      Sitio Web
                    </Button>
                  </a>
                  <a
                    href="https://github.com/r-gabriel-f/country_api_react"
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
            <div className="image-container">
              <p>Movie Api React</p>

              <img src={t3} id="img-t1" alt="Icono de responsivo"></img>
              <div className="button-container">
                <div className="botones-portafolio">
                  <a
                    href="https://r-gabriel-f.github.io/desafio/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" id="bp">
                      Sitio Web
                    </Button>
                  </a>
                  <a
                    href="https://github.com/r-gabriel-f/desafio"
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
            <div className="image-container">
              <p>Pokemon Api React</p>

              <img src={t4} id="img-t1" alt="Icono de responsivo"></img>
              <div className="button-container">
                <div className="botones-portafolio">
                  <a
                    href="https://r-gabriel-f.github.io/pokemon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" id="bp">
                      Sitio Web
                    </Button>
                  </a>
                  <a
                    href="https://github.com/r-gabriel-f/pokemon"
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
            <div className="image-container">
              <p>Shopping cart</p>

              <img src={t5} id="img-t1" alt="Icono de responsivo"></img>
              <div className="button-container">
                <div className="botones-portafolio">
                  <a
                    href="https://r-gabriel-f.github.io/carrito_de_compras/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="contained" id="bp">
                      Sitio Web
                    </Button>
                  </a>
                  <a
                    href="https://github.com/r-gabriel-f/carrito_de_compras"
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
