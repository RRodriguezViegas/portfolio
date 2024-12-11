import { useState } from "react";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Botón Hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-between items-end w-12 h-5 z-10 relative focus:outline-none"
      >
        <span
          className={`block h-0.5 bg-gray-800 rounded transition-all duration-500 ${
            isOpen ? "rotate-45 translate-y-2 w-full" : "w-full"
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-gray-800 rounded transition-all duration-500 ${
            isOpen ? "-rotate-45 -translate-y-5 w-full" : "w-3/4"
          }`}
        ></span>
      </button>

      {/* Menú flotante */}
      <nav
        className={`z-50 w-64 h-96 absolute top-12 right-0 bg-white shadow-lg p-4 rounded-lg transform transition-transform duration-300 ${
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
