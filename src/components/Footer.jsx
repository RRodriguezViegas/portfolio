import React from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";
import EmailIcon from "../assets/icons/mail.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

function Footer({ sections }) {
  const handleBackToTop = () => {
    gsap.to(window, {
      scrollTo: sections[0],
      duration: 0.8,
      ease: "power3.out",
    });
  };
  return (
    <>
      <div className="footer section h-screen flex flex-col justify-center">
        <section className="border-b-2 border-[#EAD6C9] h-2/4 w-3/4 self-center">
          <h1 className="text-4xl font-bold text-[#EAD6C9]">Info & links</h1>
          <div className="text-2xl font-light text-[#EAD6C9] space-y-4 pt-4">
            <p>ramiirv26@gmail.com</p>
            <p>+54 9 11 4146-1834</p>
            <a
              className="block underline"
              href="RamaRodriguezViegas.pdf"
              download
            >
              Download CV
            </a>
            <button className="underline" onClick={handleBackToTop}>
              Back to top
            </button>
          </div>
        </section>
        <section className="w-3/4 self-center flex justify-between pt-14 text-xl text-[#EAD6C9]">
          <p>&copy; 2023 Rama. All rights reserved</p>
          <div className="space-x-6">
            <a
              href="https://github.com/RRodriguezViegas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="inline"
                src={GitHubIcon}
                alt="Github Icon"
                width="30"
                height="30"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ramiro-rodriguez-viegas-1562171aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="inline"
                src={LinkedInIcon}
                alt="LinkedIn Icon"
                width="30"
                height="30"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="inline"
                src={EmailIcon}
                alt="Email Icon"
                width="30"
                height="30"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                className="inline"
                src={InstagramIcon}
                alt="Instagram Icon"
                width="30"
                height="30"
              />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
