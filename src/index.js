import React from 'react';
import ReactDOM from 'react-dom/client';
// Primero importa los estilos de PrimeReact
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';  // Agrega esta línea
import 'primeicons/primeicons.css';
// Después importa los estilos de tu aplicación
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
