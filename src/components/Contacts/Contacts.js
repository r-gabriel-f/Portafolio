import React from "react";
import "../Contacts/Contacts.css";

export default function Contacts() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="container-contacts">
      <div className="con-with">
        <div className="container-div-contactas">
          <h1>Contactos</h1>
          <p>
            Si estás interesado en adquirir mis servicios para desarrollar tu
            sitio web o aplicación web no dude en contactarnos
          </p>
        </div>
        <div className="container-icons-contacts">
          <div>
            <a href="https://twitter.com/robert79757" target="_banks">
              <ion-icon name="logo-twitter" id="iconos-contacto-tw"></ion-icon>
              <h3>Twitter</h3>
            </a>
          </div>
          <div>
            <a href="mailto:r.gabriel.f@outlook.com" target="_banks">
              <ion-icon
                name="mail-outline"
                id="iconos-contacto-email"
              ></ion-icon>
              <h3>Email</h3>
            </a>
          </div>
          <div>
            <a href="https://github.com/r-gabriel-f" target="_banks">
              <ion-icon name="logo-github" id="iconos-contacto-git"></ion-icon>
              <h3>Github</h3>
            </a>
          </div>
          <div>
            <a href="https://wa.link/mvtvgw" target="_banks">
              <ion-icon name="logo-whatsapp" id="iconos-contacto-sw"></ion-icon>
              <h3>Whatsapp</h3>
            </a>
          </div>

          <div>
            <a
              href="https://linkedin.com/in/robert-gabriel-flores-99b903234"
              target="_banks"
            >
              <ion-icon
                name="logo-linkedin"
                id="iconos-contacto-link"
              ></ion-icon>
              <h3>Linkedin</h3>
            </a>
          </div>
        </div>
        <footer className="Derechos">
          <p>
            &copy; {currentYear} Robert Gabriel. <br />
            Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </section>
  );
}
