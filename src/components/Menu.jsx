import { useState } from "react";
import { gsap } from "gsap";

export default function HamburgerMenu() {
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
        className={`z-10 w-80 h-96 absolute -top-6 right-0 bg-[#EAD6C9] shadow-lg p-4 rounded-lg transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-500">
              Servicios
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 font-bold hover:text-blue-500">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
