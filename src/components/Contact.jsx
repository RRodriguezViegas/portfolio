import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [hora, setHora] = useState("");
  const form = useRef();

  useEffect(() => {
    const actualizarHora = () => {
      const opciones = {
        timeZone: "America/Argentina/Buenos_Aires",
        hour12: true,
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
        "service_brfgrgt", // Reemplazá con tu Service ID
        "template_0h91mk9", // Reemplazá con tu Template ID
        form.current,
        "Kn3eZFFfhy85sc4QJ" // Reemplazá con tu Public Key
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
    <div className="section h-screen flex items-center justify-center text-[#242038]">
      <div className="w-3/4 h-3/6 flex flexs-row">
        <section className="w-1/2 h-3/4 flex flex-col justify-between">
          <div>
            <h1 className="MuseoModerno text-7xl pb-5">Let's collaborate</h1>
            <h3 className="text-2xl">Buenos Aires, Argentina</h3>
            <p className="text-xl font-light">{hora}</p>
          </div>
          <div className="flex flex-row justify-between text-2xl mr-28">
            <div>
              <p>Send me an email</p>
              <p className="font-light text-xl">ramiirv26@gmail.com</p>
            </div>
            <div>
              <p>Or if you prefer to chat</p>
              <p className="font-light text-xl">+54 9 11 4146 1834</p>
            </div>
          </div>
        </section>
        <section className="w-1/2 h-3/4  flex flex-col justify-between">
          <h1 className="text-2xl pb-4">Say hello</h1>
          <form onSubmit={sendEmail} ref={form}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs">
                  NAME
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  SUBJECT
                </label>
                <br />
                <input
                  type="text"
                  name="subject"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Choose subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  COMPANY
                </label>
                <br />
                <input
                  type="text"
                  name="company"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  EMAIL
                </label>
                <br />
                <input
                  type="email"
                  name="user_email"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Email address"
                  required
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  MESSAGE
                </label>
                <br />
                <textarea
                  type="text"
                  name="message"
                  className="text-lg w-full bg-transparent border border-transparent focus:outline-none focus:border-[#242038] placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Start typing here"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="underline text-xl inline-block self-start"
            >
              Submit &rarr;
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;
