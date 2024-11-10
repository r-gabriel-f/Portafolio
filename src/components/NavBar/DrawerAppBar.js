import * as React from "react";
import { Menubar } from "primereact/menubar";


function DrawerAppBar() {
  const items = [
    {
      label: "Inicio",
      icon: "pi pi-home",

    },
    {
      label: "Sobre Mi",
      icon: "pi pi-user",

    },
    {
      label: "Servicios",
      icon: "pi pi-cog",

    },
    {
      label: "Portafolio",
      icon: "pi pi-images",

    },
    {
      label: "Contactos",
      icon: "pi pi-phone",

    },
  ];

  const end = (
    <div className="flex items-center gap-2 mr-2">
      <i className="pi pi-code mx-2" style={{ color: "var(--primary-color)" }}></i>
      RG
    </div>
  );

  return (
    <div className="card">
      <Menubar 
        model={items} 
        end={end} 
      />
    </div>
  );
}

export default DrawerAppBar;