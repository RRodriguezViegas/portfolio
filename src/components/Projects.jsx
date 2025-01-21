import React from "react";

function Projects() {
  return (
    <div className="about-bg section h-screen flex flex-col items-center justify-center text-center">
      <h1 className="MuseoModerno text-7xl font-bold text-[#242038]">
        What I've built
      </h1>
      <p className="text-2xl text-[#242038] p-4">
        A selection of projects showcasing my skills in full-stack development.
      </p>

      <div className="grid grid-cols-3 gap-5 m-8">
        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/el-fortin-bg.jpg')] bg-cover bg-no-repeat blur-sm" />
            <img
              className="relative w-1/2 h-1/2 rounded-sm shadow-xl"
              src="src\assets\el-fortin-logo.png"
              alt="Logo El Fortin"
            />
          </div>
        </button>

        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/woofer-bg.png')] bg-contain blur-sm" />
            <img
              className="relative w-1/2 h-1/2 rounded-sm"
              src="src/assets/woofer-logo.png"
              alt="Logo Woofer"
            />
          </div>
        </button>

        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/drivers-bg.jpg')] bg-contain blur-sm" />
            <img
              className="relative w-1/2 h-1/2 rounded-sm"
              src="src/assets/drivers-logo.png"
              alt="Logo Drivers"
            />
          </div>
        </button>

        <button>
          <div className="relative w-60 h-60 rounded-sm flex justify-center items-center shadow-2xl hover:scale-110 hover:-translate-y-6 ease-in-out duration-300">
            <div className="absolute w-full h-full flex justify-center items-center bg-[url('src/assets/rama-portfolio-bg.png')] bg-contain blur-sm" />
            <div className="relative w-1/2 h-1/2 rounded-sm">
              <span className="text-9xl text-[#242038] MuseoModerno cursor-default">
                R
              </span>
            </div>
          </div>
        </button>

        <div className="bg-gray-400 w-60 h-60 rounded-sm blur-sm"></div>
        <div className="bg-gray-400 w-60 h-60 rounded-sm blur-sm"></div>
      </div>
      <span className="text-2xl text-[#242038] underline">
        <a href="#">All my projects</a>
      </span>
    </div>
  );
}

export default Projects;
