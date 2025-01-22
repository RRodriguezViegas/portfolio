import React from "react";

function ElFortinDetail2() {
  return (
    <div className="section contact-bg h-screen flex flex-col items-center">
      <section className=" flex items-center justify-center">
        <p className="text-4xl">IMAGE</p>
      </section>
      <section className="border border-slate-800 h-96 w-3/4 flex flex-row">
        <div className="border border-slate-800 m-6 w-1/4">
          <h1 className="text-7xl font-bold">El Fortin</h1>
          <h2 className="text-2xl mt-3">
            Proyecto de sitio web con blog para empresa de alambrados rurales
          </h2>
        </div>
        <div className="border border-slate-800 m-6 p-4 w-3/4 space-y-6">
          <div className="space-y-1">
            <h2 className="text-xl font-bold">Descripción</h2>
            <p className="text-lg">
              Diseño y desarrollo de un sitio web completo para Alambrados El
              Fortín, una empresa dedicada a la instalación de alambrados
              rurales. El objetivo principal era presentar la empresa, exhibir
              proyectos realizados y facilitar el contacto con potenciales
              clientes.
            </p>
          </div>
          <div className="flex flex-row">
            <div className="space-y-1 w-1/2">
              <h2 className="text-xl font-bold">Caracteristicas principales</h2>
              <ul className="text-lg">
                <li>Diseño y desarrollo de un sitio web</li>
                <li>Exhibir proyectos realizados</li>
                <li>Facilitar el contacto con potenciales clientes</li>
                <li>Presentar la empresa</li>
              </ul>
            </div>
            <div className="space-y-1 w-1/2">
              <h2 className="text-xl font-bold">Tecnologias usadas</h2>
              <ul className="text-lg">
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ElFortinDetail2;
