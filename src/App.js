import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import DrawerAppBar from "./components/DrawerAppBar";
import { Inicio } from "./components/Inicio";
import { About } from "./components/About";

import { Services } from "./components/Services";
import Contacts from "./components/Contacts";

import { Element } from "react-scroll";


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
        <Element name="contactos">
          <Contacts />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;



