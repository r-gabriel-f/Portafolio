import * as React from "react";
import { Menubar } from "primereact/menubar";


function DrawerAppBar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",

    },
    {
      label: "About",
      icon: "pi pi-user",

    },
    {
      label: "Services",
      icon: "pi pi-cog",

    },
    {
      label: "Projects",
      icon: "pi pi-briefcase",

    },
    {
      label: "Contact",
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