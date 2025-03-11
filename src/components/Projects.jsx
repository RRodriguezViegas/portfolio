import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="about-bg pt-10 section h-full lg:h-screen flex flex-col items-center justify-center md:text-center mx-4 md:mx-0">
      <h1 className="pr-appear fonts text-4xl md:text-5xl lg:text-7xl font-bold text-[#242038]">
        Algunos de mis proyectos
      </h1>
      <p className="pr-appear fonts text-xl lg:text-2xl text-[#242038] py-4">
        Una selección de proyectos que muestran mis habilidades como
        desarrollador
      </p>

      <div className="pr-appear grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 sm:p-4 sm:w-[80vw] max-w-[900px]">
        <Link to={"/elfortin"}>
          <div className="relative aspect-square rounded-sm flex justify-center items-center shadow-2xl lg:hover:scale-110 lg:hover:-translate-y-6 ease-in-out duration-300">
            <div
              className="absolute w-full h-full flex justify-center items-center bg-[url('/projects-files/el-fortin-bg.jpg')] bg-cover bg-no-repeat blur-sm"
              style={{ willChange: "filter, transform" }}
            />
            <img
              className="relative w-1/2 h-1/2 rounded-sm shadow-xl"
              src="projects-files\el-fortin-logo.png"
              alt="Logo El Fortin"
            />
          </div>
        </Link>

        <Link to={"/ramadev-portfolio"}>
          <div
            className="bg-gray-300 aspect-square rounded-sm blur-sm"
            style={{ willChange: "filter, transform" }}
          />
        </Link>

        <div
          className="bg-gray-300 aspect-square rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        />

        <div
          className="bg-gray-300 aspect-square rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        />

        <div
          className="bg-gray-300 aspect-square rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        />
        <div
          className="bg-gray-300 aspect-square rounded-sm blur-sm"
          style={{ willChange: "filter, transform" }}
        />
      </div>

      {/* <span className="pr-appear text-2xl text-[#242038] underline">
        <a href="#">All my projects</a>
      </span> */}
    </div>
  );
}

export default Projects;
