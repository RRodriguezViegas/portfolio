import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function ElFortinDetail() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      window.scrollTo(0, 0);
      if (window.innerWidth < 768) {
        // Si el ancho de pantalla es menor que 768px (mobile)
        videoRef1.current.autoplay = false;
        videoRef2.current.autoplay = false;
      } else {
        videoRef1.current.autoplay = true;
        videoRef2.current.autoplay = true;
      }
    };

    handleResize(); // Verifica el tamaño al inicio
    window.addEventListener("resize", handleResize); // Escucha los cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento
    };
  }, []);

  const handleVideoClick = videoRef => {
    videoRef.current.play();
  };

  useGSAP(() => {
    gsap.from(".appear", {
      y: 25,
      ease: "power4.out",
      delay: 0.5,
      duration: 1.5,
      stagger: 0.4,
    });
    gsap.from(".appear", {
      ease: "power4.out",
      opacity: 0,
      delay: 0.5,
      duration: 1.2,
      stagger: 0.4,
    });

    gsap.from(".bg-appear", {
      ease: "power4.out",
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
    });

    if (window.innerWidth >= 640) {
      // 640px es el breakpoint de sm: en Tailwind
      gsap.utils.toArray(".appear-at-scroll").forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "20% 90%",
          },
          opacity: 0,
          duration: 1.2,
          ease: "power1.out",
        });
      });
    }
  });

  return (
    <div className="bg-appear fonts bg-[#ffffff] h-full w-full text-[#000000] contact-bg flex flex-col justify-center">
      <section className="w-full md:w-3/4 self-center">
        <div className="appear mt-24 md:mt-32 mx-4 md:mx-0">
          <h1 className="text-6xl 2xl:text-9xl font-bold fortin ">EL FORTIN</h1>
          <p className="text-lg xl:text-2xl mt-3 opacity-70">
            Proyecto de sitio web con blog para empresa de alambrados rurales
          </p>
        </div>
      </section>

      <section className="appear my-2 flex items-center justify-center">
        <div className="w-full md:w-3/4 aspect-[16/11] mx-4 md:mx-0 self-center">
          <div className="rounded-md">
            <img
              src="elfortin-files/elfortin-mockup.png"
              alt="Mockup de una laptop con el sitio web de El Fortin"
              className="object-contain w-full h-full rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="appear-at-scroll flex justify-center my-2 lg:my-6">
        <div className="bg-[#0000000d] rounded-xl p-2 md:p-10 flex flex-col md:grid md:grid-cols-2 gap-y-8 lg:gap-y-20 w-full md:w-3/4 h-full mx-4 md:mx-0 text-sm lg:text-lg">
          <div className="space-y-4">
            <p className="opacity-50 text-lg">Cliente</p>
            <div className="flex flex-col items-start justify-center space-y-7">
              <span className="text-6xl xl:text-7xl font-bold fortin">
                EL FORTIN
              </span>
              <a
                href="https://alambradoselfortin.com"
                className="text-2xl flex items-center gap-1 underline"
                target="_blank"
                rel="noreferrer"
              >
                Visitar sitio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.586 4H9a1 1 0 110-2h8a1 1 0 011 1v8a1 1 0 11-2 0V5.414l-9.293 9.293a1 1 0 01-1.414-1.414L15.586 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <p className="opacity-50 text-lg">Descripción</p>
            <p className="text-base">
              Diseñé y desarrollé un sitio web completo para Alambrados El
              Fortín, una empresa dedicada a la instalación de alambrados
              rurales. El objetivo principal era presentar la empresa, exhibir
              proyectos realizados y facilitar el contacto con potenciales
              clientes.
            </p>
          </div>
          <div className="space-y-2">
            <p className="opacity-50 text-lg">Servicios</p>
            <p className="text-base">
              — Desarrollo web <br />
              — Diseño web <br />
              — Funcionalidad de blog <br />
              — Seguridad y autenticación <br />
              — Optimización y despliegue <br />
            </p>
          </div>
          <div className="space-y-4">
            <p className="opacity-50 text-lg">Tecnologías</p>
            <div>
              <ul className="grid grid-cols-3 gap-4 text-center text-base">
                <li className="bg-[#00000011] rounded-full">React</li>
                <li className="bg-[#00000011] rounded-full">Node</li>
                <li className="bg-[#00000011] rounded-full">Express</li>
                <li className="bg-[#00000011] rounded-full">PostgreSQL</li>
                <li className="bg-[#00000011] rounded-full">Sequelize</li>
                <li className="bg-[#00000011] rounded-full">Tailwind</li>
                <li className="bg-[#00000011] rounded-full">BCrypt</li>
                <li className="bg-[#00000011] rounded-full">Multer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="appear-at-scroll my-6 lg:my-12 flex items-center justify-center">
        <div className="w-full md:w-3/4 mx-4 md:mx-0 h-1/6 self-center">
          <img
            src="elfortin-files/elfortin-mockup-phone.png"
            alt="Mockup de un celular con el sitio web de El Fortin"
            className="object-contain w-full h-full rounded-md"
          />
        </div>
      </section>

      <section className="appear-at-scroll flex w-full md:w-3/4 my-6 lg:my-12 self-center">
        <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-0 space-y-6 pr-6">
          <div className="w-full 2xl:w-4/6 mx-4 sm:mx-8 md:mx-0 h-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold">
              Sistema de publicaciones
            </h2>
            <p className="text-lg md:text-2xl text-[#000000e1]">
              Los administradores pueden{" "}
              <span className="font-semibold">subir imágenes</span> y
              descripciones de proyectos realizados a través de un{" "}
              <span className="font-semibold">panel de gestión</span>, donde
              tienen la posibilidad de cargar varias imágenes por publicación,
              agregar una descripción detallada del trabajo realizado y{" "}
              <span className="font-semibold">editar o eliminar</span>{" "}
              publicaciones anteriores. Esto les permite mantener el sitio
              actualizado con los últimos proyectos, brindando una mejor
              presentación de sus servicios a los clientes potenciales.
            </p>
            <p className="text-lg md:text-2xl text-[#000000e1]">
              Además, las publicaciones pueden mantenerse en estado de borrador,
              permitiendo a los administradores prepararlas con anticipación y
              publicarlas cuando sea necesario. También pueden despublicar una
              publicación sin necesidad de eliminarla, manteniéndola almacenada
              en el sistema para futuras ediciones o republicaciones.
            </p>
          </div>
        </div>
      </section>

      <section className="appear-at-scroll mx-4 md:mx-0 my-6 lg:my-12 flex flex-col items-center space-y-4">
        <div className="w-full md:w-3/4 space-y-4">
          <video
            ref={videoRef1}
            src="elfortin-files/elfortin-publicaciones-cc.mov"
            autoPlay
            loop
            muted
            playsinline
            className="rounded-md"
            onClick={() => handleVideoClick(videoRef1)}
          />
          <img
            src="elfortin-files/elfortin-publicaciones-1.svg"
            alt="Componentes del panel de gestión de publicaciones"
            className="rounded-md"
          />
          <img
            src="elfortin-files/elfortin-publicaciones-2.svg"
            alt="Componentes del panel de gestión de publicaciones"
            className="rounded-md"
          />
        </div>
      </section>

      <section className="appear-at-scroll flex w-full md:w-3/4 my-6 lg:my-12 self-center">
        <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-0 space-y-6 pr-6">
          <div className="w-full 2xl:w-4/6 mx-4 sm:mx-8 md:mx-0 h-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Gestion de consultas
            </h2>
            <p className="text-lg md:text-2xl text-[#000000e1]">
              El sistema de consultas permite a los usuarios{" "}
              <span className="font-semibold">enviar preguntas</span> o
              solicitudes a través de un formulario simple, donde deben
              completar su nombre y al menos un dato de contacto (teléfono o
              email), junto con su mensaje. Desde el{" "}
              <span className="font-semibold">panel de administración</span>,
              los encargados del sitio pueden revisar todas las consultas
              recibidas, marcarlas como leídas o eliminarlas, asegurando un
              <span className="font-semibold"> seguimiento</span> eficiente de
              las solicitudes de los clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="appear-at-scroll my-6 lg:my-12 flex items-center justify-center">
        <div className="w-full mx-4 md:mx-0 md:w-3/4 h-1/6 self-center">
          <video
            ref={videoRef2}
            src="elfortin-files/elfortin-consultas-cc.mov"
            autoPlay
            loop
            muted
            playsinline
            className="rounded-md"
            onClick={() => handleVideoClick(videoRef2)}
          />
        </div>
      </section>

      <section className="appear-at-scroll flex w-full md:w-3/4 my-6 lg:my-12 self-center">
        <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-0 space-y-6 pr-6">
          <div className="w-full 2xl:w-4/6 mx-4 sm:mx-8 md:mx-0 h-1/2 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold">Diseño</h2>
            <p className="text-lg md:text-2xl text-[#000000e1]">
              El diseño de la web se basa en elecciones visuales sencillas y
              directas, buscando facilitar la navegación. Los colores fueron
              seleccionados de acuerdo con las preferencias del cliente,
              buscando transmitir la esencia de su marca de forma clara. Los
              iconos se mantuvieron simples para evitar sobrecargar la interfaz,
              y la tipografía fue elegida para asegurar legibilidad y coherencia
              en todo el sitio. Aunque el diseño es minimalista, cada detalle
              fue pensado para ofrecer una experiencia de usuario funcional y
              accesible.
            </p>
          </div>
        </div>
      </section>

      <section className="appear-at-scroll flex flex-col space-y-4 w-full md:w-3/4 my-6 lg:my-12 self-center">
        <div className="flex md:space-x-4 justify-center mx-4 md:mx-0">
          <img
            src="elfortin-files/elfortin-palette.svg"
            alt="Paleta de colores de El Fortin"
            className="w-1/2"
          />
          <img
            src="elfortin-files/elfortin-icons.png"
            alt="Iconos del sitio web"
            className="w-1/2"
          />
        </div>
        <img
          src="elfortin-files/elfortin-diseno-1.svg"
          alt="Componente de El Fortin"
          className="rounded-md mx-2 md:mx-0"
        />
        <img
          src="elfortin-files/elfortin-diseno-2.svg"
          alt="Componentes de El Fortin"
          className="rounded-md mx-2 md:mx-0"
        />
      </section>

      <section className="opacity-1 flex w-3/4 my-6 self-center">
        <a
          href="http://localhost:5173"
          className="flex flex-col items-center bg-[#00000011] w-1/2 h-96 border border-[#2e2e2e11] hover:bg-[#00000093] transition-all duration-100"
        ></a>
        <a
          href="http://localhost:5173/woofer"
          className="flex flex-col items-center bg-[#00000011] w-1/2 h-96 border border-[#2e2e2e11] hover:bg-[#00000093] transition-all duration-100"
        ></a>
      </section>
    </div>
  );
}

export default ElFortinDetail;
