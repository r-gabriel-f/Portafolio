import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Chip } from "primereact/chip";
export const CardComponete = ({ data }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
        {data.map((proyect, i) => {
          const header = (
            <img 
              alt={proyect.name} 
              src={proyect.img} 
              className="h-[200px] w-full" 
            />
          );
          
          const footer = (
            <div className="flex flex-col xl:flex-row w-full justify-center items-center gap-2">
              <Button
                label="Website"
                icon="pi pi-external-link"
                onClick={() => window.open(proyect.web, "_blank")}
                className="w-full"
              />
              <Button
                label="Repository"
                severity="secondary"
                icon="pi pi-github"
                onClick={() => window.open(proyect.repositori, "_blank")}
                className="w-full"
              />
            </div>
          );

          return (
            <div key={i} className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)]">
              <Card
                className="h-full"
                title={proyect.name}
                subTitle={
                  <div className="flex flex-wrap gap-2 justify-center">
                    {proyect.technology.map((tech, index) => (
                      <Chip key={index} label={tech} />
                    ))}
                  </div>
                }
                footer={footer}
                header={header}
                pt={{
                  title: {
                    className:
                      "flex h-24 text-center items-center justify-center text-xl sm:text-2xl font-bold",
                  },
                  subTitle: {
                    className:
                      "flex h-16 text-center items-center justify-center text-sm sm:text-base",
                  },
                  content: { className: "p-0" },
                  body: { className: "p-4" },
                }}
              ></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
