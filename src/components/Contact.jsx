import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Contact() {
  const [hora, setHora] = useState("");
  const form = useRef();

  useGSAP(() => {
    gsap.to(".parallax-circle", {
      y: 20,
      x: 40,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".parallax-pill", {
      y: 90,
      x: -400,
      duration: 23,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".parallax-oval", {
      y: 0,
      x: -300,
      duration: 26,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2,
    });

    gsap.to(".parallax-oval", {
      y: 150,
      duration: 26,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2.3,
    });
  });

  useEffect(() => {
    const actualizarHora = () => {
      const opciones = {
        timeZone: "America/Argentina/Buenos_Aires",
        hour12: false,
      };
      const fecha = new Date();
      const horaLocal = fecha.toLocaleTimeString("es-AR", opciones);
      setHora(horaLocal);
    };

    actualizarHora();
    const intervalo = setInterval(actualizarHora, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_brfgrgt", // Service ID
        "template_0h91mk9", // Template ID
        form.current,
        "Kn3eZFFfhy85sc4QJ" // Public Key
      )
      .then(
        result => {
          console.log("Email enviado:", result.text);
          alert("¡Email enviado con éxito!");
        },
        error => {
          console.log("Error al enviar:", error.text);
          alert("Hubo un error, intentá de nuevo.");
        }
      );
  };

  return (
    <div className="about-bg z-0 relative section h-screen flex items-center justify-center text-[#242038]">
      {/* <div
        className="parallax-circle -left-40 -bottom-40 absolute -z-10 rounded-full w-96 h-96 bg-[#ff61dd57] blur-md"
        style={{ willChange: "filter, transform" }}
      />
      <div
        className="parallax-pill left-3/4 absolute -z-10 rounded-full w-96 h-40 rotate-12 bg-[#ff61dd57] blur-md"
        style={{ willChange: "filter, transform" }}
      />
      <div
        className="parallax-oval left-1/4 top-8 absolute -z-10 rounded-full w-48 h-60 rotate-12 bg-[#ff61dd57] blur-md"
        style={{ willChange: "filter, transform" }}
      /> */}

      <div
        className="ct-appear w-3/4 h-5/6 lg:h-3/6 flex flex-col lg:flex-row rounded-xlp-2"
        style={{ willChange: "filter, transform" }}
      >
        <section className="w-full lg:w-1/2 h-3/4 mb-8 lg:mb-0 flex flex-col justify-between">
          <div>
            <h1 className="MuseoModerno text-7xl pb-5">Contacto</h1>
            <h3 className="text-xl 2xl:text-2xl">Buenos Aires, Argentina</h3>
            <p className="text-lg 2xl:text-xl font-light">{hora}</p>
          </div>
          <div className="flex flex-row justify-between text-xl 2xl:text-2xl mr-28">
            <div>
              <p>Enviame un mail</p>
              <p className="font-light text-lg 2xl:text-xl">
                ramirorvdev@gmail.com
              </p>
            </div>
            <div>
              <p>O si preferis charlar</p>
              <p className="font-light text-lg 2xl:text-xl">
                +54 9 11 4146 1834
              </p>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-1/2 h-3/4  flex flex-col justify-between">
          <h1 className="text-2xl pb-4">no lo sé</h1>
          <form onSubmit={sendEmail} ref={form}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-md">
                  NOMBRE
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-md">
                  ASUNTO
                </label>
                <br />
                <input
                  type="text"
                  name="subject"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Motivo de consulta"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-md">
                  EMPRESA
                </label>
                <br />
                <input
                  type="text"
                  name="company"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Tu empresa"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-md">
                  EMAIL
                </label>
                <br />
                <input
                  type="email"
                  name="user_email"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-md">
                  MENSAJE
                </label>
                <br />
                <textarea
                  type="text"
                  name="message"
                  className="text-lg w-full bg-transparent border border-transparent focus:outline-none focus:border-[#242038] placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Escribí acá"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="underline text-xl inline-block self-start"
            >
              Enviar &rarr;
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
