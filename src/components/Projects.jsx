import React from "react";

function Projects() {
  return (
    <div className="section h-screen flex flex-col items-center justify-center text-center">
      <h1 className="MuseoModerno text-7xl font-bold text-[#242038]">
        What I've built
      </h1>
      <p className="text-2xl text-[#242038] p-4">
        A selection of projects showcasing my skills in full-stack development.
      </p>
      <div className="grid grid-cols-3 gap-4 m-8">
        <div className="bg-gray-800 w-60 h-60 rounded-sm"></div>
        <div className="bg-gray-800 w-60 h-60 rounded-sm"></div>
        <div className="bg-gray-800 w-60 h-60 rounded-sm"></div>
        <div className="bg-gray-800 w-60 h-60 rounded-sm"></div>
        <div className="bg-gray-800 w-60 h-60 rounded-sm"></div>
        <div className="bg-gray-800 w-60 h-60 rounded-sm"></div>
      </div>
      <span className="text-2xl text-[#242038] underline">
        <a href="#">All my projects</a>
      </span>
    </div>
  );
}

export default Projects;
