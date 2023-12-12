import React from "react";
import "../Services/Services.css";
import rep from "../../assets/iconos/services/resp.png";
import inter from "../../assets/iconos/services/interface.png";
import speed from "../../assets/iconos/services/speed.png";
import social from "../../assets/iconos/services/social-media.png";
import checked from "../../assets/iconos/services/checked.png";
import seo from "../../assets/iconos/services/seo.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Services = () => {
  return (
    <section className="container-services">
      <div className="mar-service">
        <div className="container-obejtivo">
          <h1>Servicios</h1>
          <p>
            Mi objetivo es proporcionar soluciones personalizadas y de calidad
            para satisfacer las necesidades de mis clientes.
          </p>
        </div>

        <div className="iconos-services">
          <div className="services-div">
            <h3>Responsivo</h3>
            <LazyLoadImage src={rep} id="img-icon" alt="Icono de responsivo"></LazyLoadImage>
            <p>
              Sistema web que se adapten y funcionen de manera óptima en
              cualquier dispositivo. Es esencial que tu sitio web proporcione
              una experiencia de usuario fluida y atractiva, tanto en
              smartphones como en tablets y ordenadores de escritorio.
            </p>
          </div>
          <div className="services-div">
            <h3>Interfaces interactivas</h3>
            <LazyLoadImage src={inter} id="img-icon" alt="Icono de interaccion"></LazyLoadImage>
            <p>
              Creación de interfaces interactivas que cautivan y deleitan a los
              usuarios con enfoque que se centra en el diseño intuitivo y
              atractivo, brindando una experiencia única y satisfactoria.
            </p>
          </div>
          <div className="services-div">
            <h3>Optimización de rendimiento</h3>
            <LazyLoadImage src={speed} id="img-icon" alt="Icono de rendimeinto"></LazyLoadImage>
            <p>
              Servicio de optimización de rendimiento se enfoca en mejorar la
              velocidad y la eficiencia de tu sitio web para brindar una
              experiencia excepcional a los usuarios.
            </p>
          </div>
          <div className="services-div">
            <h3>Interacción en redes sociales</h3>
            <LazyLoadImage src={social} id="img-icon" alt="Icono de social"></LazyLoadImage>
            <p>
              Servicio de interacción en redes sociales diseñado para potenciar
              la presencia y participación de sus clientes en las plataformas
              digitales.
            </p>
          </div>
          <div className="services-div">
            <h3>Mantenimiento y actualización</h3>
            <LazyLoadImage src={checked} id="img-icon" alt="Icono de actualziacion"></LazyLoadImage>
            <p>
              Mantenimiento y actualización para brindar a nuestros usuarios
              tranquilidad y asegurar que su sitio web esté siempre actualizado
              y funcionando de manera óptima.
            </p>
          </div>
          <div className="services-div">
            <h3>SEO</h3>
            <LazyLoadImage src={seo} id="img-icon" alt="Icono de seo"></LazyLoadImage>
            <p>
              Mejorar la visibilidad de tu sitio web en los motores de búsqueda
              y ofrecer una experiencia de usuario de calidad, para aumentar el
              ranking en los resultados de búsqueda relevantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
