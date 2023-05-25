
import "./App.css";

import { Inicio } from "./components/Inicio";
import { About } from "./components/About";
import { Services } from "./components/Services";
import Contacts from "./components/Contacts";
import { Encabezado } from "./components/Encabezado";




function App() {
  return (
    <form className="container-div">
      <div>
        <Encabezado></Encabezado>
      </div>
      <div id="i">
        <Inicio></Inicio>
      </div>
      <div id="i">
        <About></About>
      </div>
      <div id="i">
        <Services></Services>
      </div>
      <div id="i">
        <Contacts></Contacts>
      </div>
    </form>
  );
}

export default App;
