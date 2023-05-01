import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container-header">
      <header>
        <div className='logo'>
          <a href="#">RG</a>
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
  );
}

export default App;
