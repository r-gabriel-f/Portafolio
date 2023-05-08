import React from 'react'
import './Encabezado.css'
import logo from '../assets/img/logo.jpg';
export const Encabezado = () => {
  return (
    <div className="container-header">
      <header>
        <div className='logo'>
          <img src={logo} href/>
        </div>
        <nav id='nav'>
          <ul>
            <li><a href='#home'>INICIO</a></li>
            <li><a href='#about'>SOBRE MI</a></li>
            <li><a href='#skills'>HABILIDADES</a></li>
            <li><a href='#portfolio'>PORTAFOLIO</a></li>
            <li><a href='#contac'>CONTACTOS</a></li>
          </ul>
        </nav>
        <div className='nav-responsive'>
          <i class="fa-solid fa-bars"></i>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </header>
    </div>
  )
}
