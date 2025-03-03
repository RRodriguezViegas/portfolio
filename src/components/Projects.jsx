import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="about-bg pt-10 section h-full lg:h-screen flex flex-col items-center justify-center text-center">
      <h1 className="pr-appear MuseoModerno text-3xl lg:text-7xl font-bold text-[#242038]">
        Algunos de mis proyectos
      </h1>
      <p className="pr-appear text-xl lg:text-2xl text-[#242038] p-4">
        Una selección de proyectos que muestran mis habilidades como
        desarrollador
      </p>

      <div className="pr-appear grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 w-[80vw] max-w-[900px]">
        <Link to={"/elfortin"}>
          <div className="relative aspect-square rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('projects-files/el-fortin-bg.jpg')] bg-cover bg-no-repeat blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm shadow-xl"
              src="projects-files\el-fortin-logo.png"
              alt="Logo El Fortin"
            />
          </div>
        </Link>

        <Link>
          <div className="relative aspect-square rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('projects-files/woofer-bg.png')] bg-contain blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm"
              src="projects-files/woofer-logo.png"
              alt="Logo Woofer"
            />
          </div>
        </Link>

        <Link>
          <div className="relative aspect-square rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('projects-files/drivers-bg.jpg')] bg-contain blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm"
              src="projects-files/drivers-logo.png"
              alt="Logo Drivers"
            />
          </div>
        </Link>

        <Link>
          <div className="relative aspect-square rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('projects-files/rama-portfolio-bg.png')] bg-contain blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <div className="relative w-1/2 h-1/2 rounded-sm">
              <span className="text-9xl text-[#242038] MuseoModerno cursor-pointer">
                R
              </span>
            </div>
          </div>
        </Link>

        <div
          className="bg-gray-400 aspect-square rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        ></div>
        <div
          className="bg-gray-400 aspect-square rounded-sm blur-sm"
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
