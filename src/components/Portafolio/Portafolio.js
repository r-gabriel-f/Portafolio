import React from "react";
import {
  DataPortafolioApi,
  DataPortafolioPages,
  DataPortafolioOther,
} from "../../data/DataPortafolio";
import { CardComponete } from "./CardComponete";
export const Portafolio = () => {
  return (
    <section className="h-auto p-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Projects
        </h2>
        <p className="leading-relaxed text-lg">
          Here you can see the projects he worked on.
        </p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-32xl md:text-3xl font-bold tracking-tight">
            API Consumption
          </h3>
          <CardComponete data={DataPortafolioApi} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-32xl md:text-3xl font-bold tracking-tight">
            Landing Pages
          </h3>
          <CardComponete data={DataPortafolioPages} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-32xl md:text-3xl font-bold tracking-tight">
            Interactive Projects
          </h3>
          <CardComponete data={DataPortafolioOther} />
        </div>
      </div>
    </section>
  );
};
