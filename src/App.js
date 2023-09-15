import "./App.css";
import { BrowserRouter} from "react-router-dom";
import DrawerAppBar from "./components/NavBar/DrawerAppBar";
import { Element } from "react-scroll";
import { Inicio } from "./components/Inicio/Inicio";
import { About } from "./components/About/About";

import { Services } from "./components/Services/Services";
import Contacts from "./components/Contacts/Contacts";
import { Portafolio } from "./components/Portafolio/Portafolio";


function App() {
  return (
    <BrowserRouter>
      <div>
        <DrawerAppBar />
        <Element name="inicio">
          <Inicio />
        </Element>
        <Element name="sobre-mi">
          <About />
        </Element>
        <Element name="servicios">
          <Services />
        </Element>
        <Element name="portafolio">
          <Portafolio />
        </Element>
        <Element name="contactos">
          <Contacts />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;



