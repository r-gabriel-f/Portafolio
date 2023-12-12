import React from "react";
import "../Portafolio/Portafolio.css";
import Button from "@mui/material/Button";
import { DataPortafolio } from "../../data/DataPortafolio";

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
            {DataPortafolio.map((proyect, i) => (
              <div key={i} className="image-container">
                <p>{proyect.name}</p>
                <img
                  src={proyect.img}
                  alt={proyect.name}
                  id="img-t1"
                ></img>
                <div className="button-container">
                  <div className="botones-portafolio">
                    <a
                      href={proyect.web}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="contained" id="bp">
                        Sitio Web
                      </Button>
                    </a>
                    <a
                      href={proyect.repositori}
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
