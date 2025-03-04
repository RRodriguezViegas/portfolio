import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

function Footer({ sections }) {
  const handleBackToTop = () => {
    gsap.to(window, {
      scrollTo: sections[0],
      duration: 0.8,
      ease: "power3.out",
    });
  };

  useGSAP(() => {
    gsap.from(".ft-appear", {
      scrollTrigger: {
        trigger: ".ft-appear",
        toggleActions: "restart pause resume pause",
      },
      x: 128,
      ease: "power4.out",
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".ft-appear", {
      scrollTrigger: {
        trigger: ".ft-appear",
        toggleActions: "restart pause resume pause",
      },
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="footer section h-screen flex flex-col justify-center">
        <section className="sm:border-b-2 border-[#e9e9e9] h-2/4 px-4 sm:px-0 w-full sm:w-3/4 self-center overflow-hidden">
          <h1 className="ft-appear text-4xl font-bold text-[#e9e9e9]">
            Información y links
          </h1>
          <div className="text-2xl font-light text-[#e9e9e9] space-y-4 pt-4">
            <p className="ft-appear">ramiirv26@gmail.com</p>
            <p className="ft-appear">+54 9 11 4146-1834</p>
            <a
              className="ft-appear block underline"
              href="RamaRodriguezViegas.pdf"
              download
            >
              Descargar CV
            </a>
            <button className="ft-appear <underline" onClick={handleBackToTop}>
              Volver arriba
            </button>
          </div>
        </section>
        <div className="border-b-2 border-[#e9e9e9] m-4 w-3/4self-center sm:hidden" />
        <section className="m-4 sm:m-0 sm:w-3/4 self-center flex flex-col lg:flex-row space-y-8 lg:space-y-0 justify-between pt-14 text-xl text-[#e9e9e9]">
          <p>&copy; {currentYear} Rama. Todos los derechos reservados</p>
          <div className="space-x-6">
            <a
              href="https://github.com/RRodriguezViegas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="inline fill-[#e9e9e9]"
                width="30"
                height="30"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ramiro-rodriguez-viegas-1562171aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="inline fill-[#e9e9e9]"
                width="30"
                height="30"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <svg
                className="inline fill-[#e9e9e9]"
                width="32"
                height="32"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mail</title>
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rama.devv?igsh=MWxvbWJmOW9id2owZw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="inline fill-[#e9e9e9]"
                width="32"
                height="32"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill-rule="nonzero"
                  d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
