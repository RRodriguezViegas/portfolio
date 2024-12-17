import React from "react";
import { useState, useEffect } from "react";

function Contact() {
  const [hora, setHora] = useState("");

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
          {/* //! Alinear con el renglon de Let's collaborate */}
          <form action="">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs">
                  NAME
                </label>
                <br />
                <input
                  type="text"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  SUBJECT
                </label>
                <br />
                <input
                  type="text"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Choose subject"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  COMPANY
                </label>
                <br />
                <input
                  type="text"
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
                  type="text"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="text-xs">
                  MESSAGE
                </label>
                <br />
                <input
                  type="text"
                  className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
                  placeholder="Start typing here"
                />
              </div>
            </div>
          </form>
          <button className="underline text-xl inline-block self-start">
            Submit &rarr;
          </button>
        </section>
      </div>
    </div>
  );
}

export default Contact;
