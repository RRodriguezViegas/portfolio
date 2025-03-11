import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

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
    <div className="section relative fonts h-full xl:h-screen my-20 flex items-center justify-center text-[#242038]">
      <div className="absolute contact-bg blur-3xl w-full h-full opacity-70 lg:opacity-100" />

      <div className="relative w-full xl:w-5/6 3xl:w-3/4 px-4 lg:px-32 xl:px-4 h-5/6 flex flex-col xl:flex-row ">
        <section className="relative w-full xl:w-8/12 3xl:1/2 h-full mb-8 xl:pr-12">
          <span className="text-4xl md:text-5xl 2xl:text-7xl text-[#00075A] font-bold block text-center xl:text-left">
            Contame sobre tu proyecto
          </span>
          <span className="text-xl lg:text-2xl xl:text-lg font-medium block mt-8 mb-16 xl:mt-4 2xl:mt-10 2xl:mb-20">
            Cada proyecto es único, y quiero asegurarme de que el tuyo tenga
            todo lo que necesitás. Así es como trabajaremos juntos para
            lograrlo:
          </span>
          <div>
            <div className="relative border-l-2 border-[#5921B9]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-3 -top-5 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
                  fill="#133695"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
                  fill="#5921B9"
                />
              </svg>
              <p className="absolute left-8 -top-6 text-xl font-semibold text-[#00075A]">
                1. Te envío una propuesta
              </p>
              <p className="text-lg font-light block px-8 pt-4 pb-10">
                Con la información que me des en el formulario, analizo qué
                necesitás y te armo una propuesta inicial. Esto incluye ideas de
                diseño, funcionalidades y una estimación de tiempo y costo.
              </p>
            </div>

            <div className="relative border-l-2 border-[#5921B9]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-3 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
                  fill="#133695"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
                  fill="#5921B9"
                />
              </svg>
              <p className="text-xl font-semibold px-8 text-[#00075A]">
                2. Ajustamos juntos los detalles
              </p>
              <p className="text-lg font-light block px-8 pt-3 pb-10">
                Te comparto la propuesta y charlamos para hacer los cambios
                necesarios. Podés contarme si hay algo que te gustaría agregar o
                modificar hasta que lleguemos a la mejor versión para vos.
              </p>
            </div>

            <div className="relative border-l-2 border-[#ffffff00]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -left-3 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
                  fill="#133695"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z"
                  fill="#5921B9"
                />
              </svg>
              <p className="text-xl font-semibold px-8 text-[#00075A]">
                3. Empezamos con el proyecto
              </p>
              <p className="text-lg font-light block px-8 pt-3">
                Una vez que todo esté definido, pongo manos a la obra. Durante
                el proceso te voy mostrando avances y ajustes para que el
                resultado sea exactamente lo que esperás.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full xl:w-6/12 3xl:w-1/2 h-full custom-shadow bg-white rounded-xl p-8 3xl:p-16">
          <span className="text-lg font-medium">
            Completá el formulario y en breve te respondo con una propuesta
            personalizada.{" "}
            <span className="font-semibold">¡El presupuesto es sin cargo!</span>
          </span>

          <form onSubmit={sendEmail} ref={form}>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-4 mt-10 space-y-4 xl:space-y-0">
              <div className="">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-gray-200 rounded-md p-3"
                  required
                />
              </div>
              <br className="xl:hidden" />
              <div className="">
                <label htmlFor="user_email"> Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full bg-gray-200 rounded-md p-3"
                  required
                />
              </div>
              <br className="xl:hidden" />
              <div className="">
                <label htmlFor="company"> Empresa (opcional)</label>
                <input
                  type="text"
                  name="company"
                  className="w-full bg-gray-200 rounded-md p-3"
                />
              </div>
              <br className="xl:hidden" />
              <div className="">
                <label htmlFor="budget"> Presupuesto (opcional)</label>
                <input
                  type="text"
                  name="budget"
                  className="w-full bg-gray-200 rounded-md p-3"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="message"> Mensaje</label>
                <textarea
                  type="text"
                  name="message"
                  className="w-full h-32 max-h-56 min-h-32 bg-gray-200 rounded-md p-3"
                />
              </div>
            </div>

            <button type="submit" className=" underline mt-4">
              Enviar consulta &rarr;
            </button>
          </form>
          <hr class="border-t border-black my-8 xl:my-3 3xl:my-8" />
          <div className="space-y-2">
            <span className="block mt-10 xl:mt-3 3xl:mt-10 text-xl font-semibold">
              Podés contactarte directamente a traves de:
            </span>
            <div className="hidden xl:grid 3xl:hidden grid-cols-2 text-center">
              <p className="text-lg text-left">ramirorvdev@gmail.com</p>
              <p className="text-lg text-center">+54 9 11 4146 1834</p>
            </div>
            <p className="text-lg xl:hidden 3xl:block">ramirorvdev@gmail.com</p>
            <p className="text-lg xl:hidden 3xl:block">+54 9 11 4146 1834</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
