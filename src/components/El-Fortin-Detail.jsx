import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
function ElFortinDetail() {
  const images = [
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
  ];

  return (
    <div className="section contact-bg h-screen flex flex-col items-center justify-center">
      <section className=" bg-[#dddddd] h-2/4 w-3/4 flex items-center justify-center">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          navigation
          pagination
          className="h-full"
          style={{
            "--swiper-pagination-color": "#000000",
            "--swiper-navigation-color": "#000000",
          }}
        >
          <SwiperSlide>
            <img
              src="src/assets/elfortin1.png"
              alt="Imagen 1"
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/elfortin2.png"
              alt="Imagen 1"
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/elfortin3.png"
              alt="Imagen 1"
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="src/assets/elfortin4.png"
              alt="Imagen 1"
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className=" h-96 w-3/4 flex flex-row">
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

export default ElFortinDetail;
