import logo from './logo.svg';
import './App.css';
import { Encabezado } from './components/Encabezado';
import { Inicio } from './components/Inicio';


function App() {
  return (
    <div>
      <Encabezado></Encabezado> 
      <br></br>
      <Inicio></Inicio>
    </div>
      
  );
}

export default App;
