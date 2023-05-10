import logo from './logo.svg';
import './App.css';
import { Encabezado } from './components/Encabezado';
import { Inicio } from './components/Inicio';
import { About } from './components/About';


function App() {
  return (
    <form className='container-div'>
      <div className='enca'>
      <Encabezado></Encabezado>
      </div>
       <div className='ini'>
       <Inicio></Inicio>
       </div>
      <div className='abo'>
      <About></About>
      </div>
      
    </form>
      
  );
}

export default App;
