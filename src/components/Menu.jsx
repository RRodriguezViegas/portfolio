import { useState } from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import LinkedInIcon from "../assets/icons/linkedin.svg";
import GitHubIcon from "../assets/icons/github.svg";
import EmailIcon from "../assets/icons/mail.svg";
import InstagramIcon from "../assets/icons/instagram.svg";

gsap.registerPlugin(ScrollToPlugin);

export default function HamburgerMenu({ sections }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      gsap.to(".top-bar", {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(".bottom-bar", {
        rotate: 0,
        x: 0,
        y: 0,
        duration: 0.4,
        width: "75%",
        ease: "power3.out",
      });
    } else {
      gsap.to(".top-bar", {
        rotate: 45,
        y: 8,
        x: -5,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.to(".bottom-bar", {
        rotate: -45,
        x: -5,
        y: -10,
        duration: 0.4,
        width: "100%",
        ease: "power3.out",
      });
    }
  };

  const handleClickInside = section => {
    handleClick();
    gsap.to(window, {
      scrollTo: sections[section],
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div className="relative">
      {/* Botón Hamburguesa */}
      <button
        onClick={handleClick}
        className="flex flex-col justify-between items-end w-12 h-5 z-50 relative focus:outline-none"
      >
        <span
          className={`top-bar block h-0.5 bg-[#242038] rounded w-full`}
        ></span>
        <span
          className={`bottom-bar block h-0.5 bg-[#242038] rounded w-3/4`}
        ></span>
      </button>

      {/* Menú flotante */}
      <nav
        className={`flex justify-around flex-col z-10 w-80 h-96 absolute -top-6 right-0 menu-bg shadow-lg p-4 rounded-lg transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <section>
          <ul className="space-y-6 text-2xl text-[#242038]">
            <li>
              <button onClick={() => handleClickInside(1)}>About Me</button>
            </li>
            <li>
              <button onClick={() => handleClickInside(2)}>My Work</button>
            </li>
            <li>
              <button onClick={() => handleClickInside(3)}>Contact</button>
            </li>
            <li>
              <a href="/Ramiro_Rodriguez_Viegas_Resume.pdf" download>
                Download CV
              </a>
            </li>
          </ul>
        </section>
        <section className="mx-10">
          <ul className="flex flex-row justify-between items-center text-2xl text-[#242038]">
            <li>
              <a
                href="https://github.com/RRodriguezViegas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHubIcon}
                  alt="Github Icon"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ramiro-rodriguez-viegas-1562171aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={EmailIcon} alt="Email Icon" width="30" height="30" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={InstagramIcon}
                  alt="Instagram Icon"
                  width="30"
                  height="30"
                />
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
}
