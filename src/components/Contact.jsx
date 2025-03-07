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
    // <div className="about-bg z-0 relative section h-screen my-20 flex items-center justify-center text-[#242038]">
    //   <div className="ct-appear mx-4 sm:mx-0 w-full sm:w-3/4 h-full space-y-12 lg:h-3/6 flex flex-col lg:flex-row">
    //     <section className="w-full xl:w-1/2 h-full mb-12 lg:mb-0 flex flex-col justify-between">
    //       <div>
    //         <h1 className="MuseoModerno text-4xl lg:text-7xl pb-5">Contacto</h1>
    //         <h3 className="text-xl 2xl:text-2xl">Buenos Aires, Argentina</h3>
    //         <p className="text-lg 2xl:text-xl font-light">{hora}</p>
    //       </div>
    //       <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between text-xl 2xl:text-2xl lg:mr-4 xl:mr-28">
    //         <div>
    //           <p>Enviame un mail</p>
    //           <p className="font-light text-lg 2xl:text-xl">
    //             ramirorvdev@gmail.com
    //           </p>
    //         </div>
    //         <div>
    //           <p>O si preferis charlar</p>
    //           <p className="font-light text-lg 2xl:text-xl">
    //             +54 9 11 4146 1834
    //           </p>
    //         </div>
    //       </div>
    //     </section>
    //     <section className="w-full xl:w-1/2 h-full flex flex-col justify-between">
    //       <h1 className="text-2xl pb-4">Enviame un mensaje</h1>
    //       <form onSubmit={sendEmail} ref={form}>
    //         <div className="grid grid-cols-2 gap-4">
    //           <div>
    //             <label htmlFor="name" className="text-md">
    //               NOMBRE
    //             </label>
    //             <br />
    //             <input
    //               type="text"
    //               name="name"
    //               className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
    //               placeholder="Tu nombre"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="name" className="text-md">
    //               ASUNTO
    //             </label>
    //             <br />
    //             <input
    //               type="text"
    //               name="subject"
    //               className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
    //               placeholder="Motivo de consulta"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="name" className="text-md">
    //               EMPRESA
    //             </label>
    //             <br />
    //             <input
    //               type="text"
    //               name="company"
    //               className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
    //               placeholder="Tu empresa"
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="name" className="text-md">
    //               EMAIL
    //             </label>
    //             <br />
    //             <input
    //               type="email"
    //               name="user_email"
    //               className="text-lg w-full bg-transparent border-b-2 border-transparent focus:outline-none focus:border-gray-800 placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
    //               placeholder="Tu correo electrónico"
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label htmlFor="name" className="text-md">
    //               MENSAJE
    //             </label>
    //             <br />
    //             <textarea
    //               type="text"
    //               name="message"
    //               className="text-lg w-full bg-transparent border border-transparent focus:outline-none focus:border-[#242038] placeholder-[#2420387a] focus:placeholder-transparent transition-all duration-300"
    //               placeholder="Escribí acá"
    //               required
    //             />
    //           </div>
    //         </div>
    //         <button
    //           type="submit"
    //           className="underline text-xl inline-block self-start"
    //         >
    //           Enviar &rarr;
    //         </button>
    //       </form>
    //     </section>
    //   </div>
    // </div>
    <div className="section h-screen my-20 flex items-center justify-center text-[#242038]">
      <section className="w-3/4 h-3/4 bg-gray-100 rounded-md flex items-center justify-center">
        <section className="w-5/12 h-full bg-blue-500 rounded-l-md custom-shadow"></section>
        <section className="w-7/12 h-full rounded-r-md "></section>
      </section>
    </div>
  );
}

export default Contact;
