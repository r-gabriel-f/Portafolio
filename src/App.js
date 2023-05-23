import logo from "./logo.svg";
import "./App.css";
import { Encabezado } from "./components/Encabezado";
import { Inicio } from "./components/Inicio";
import { About } from "./components/About";
import { Services } from "./components/Services";
import Contacts from "./components/Contacts";


function App() {
  return (
    <form className="container-div">
      <div>
        <Encabezado></Encabezado>
      </div>
      <div>
        <Inicio></Inicio>
      </div>
      <div>
        <About></About>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Contacts></Contacts>
      </div>
    </form>
  );
}

export default App;
