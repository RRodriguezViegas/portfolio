import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="about-bg pt-10 section h-screen flex flex-col items-center justify-center text-center">
      <h1 className="pr-appear MuseoModerno text-7xl font-bold text-[#242038]">
        Algunos de mis proyectos
      </h1>
      <p className="pr-appear text-2xl text-[#242038] p-4">
        Una selección de proyectos que muestran mis habilidades como
        desarrollador
      </p>

      <div className="pr-appear grid grid-cols-3 gap-5 m-8">
        <Link to={"/elfortin"}>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/el-fortin-bg.jpg')] bg-cover bg-no-repeat blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm shadow-xl"
              src="src\assets\el-fortin-logo.png"
              alt="Logo El Fortin"
            />
          </div>
        </Link>

        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/woofer-bg.png')] bg-contain blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm"
              src="src/assets/woofer-logo.png"
              alt="Logo Woofer"
            />
          </div>
        </button>

        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/drivers-bg.jpg')] bg-contain blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm"
              src="src/assets/drivers-logo.png"
              alt="Logo Drivers"
            />
          </div>
        </button>

        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/rama-portfolio-bg.png')] bg-contain blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <div className="relative w-1/2 h-1/2 rounded-sm">
              <span className="text-9xl text-[#242038] MuseoModerno cursor-pointer">
                R
              </span>
            </div>
          </div>
        </button>

        <div
          className="bg-gray-400 w-60 h-60 rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        ></div>
        <div
          className="bg-gray-400 w-60 h-60 rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        ></div>
      </div>

      {/* <span className="pr-appear text-2xl text-[#242038] underline">
        <a href="#">All my projects</a>
      </span> */}
    </div>
  );
}

export default Projects;
