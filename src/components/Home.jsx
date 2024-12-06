import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import HamburgerMenu from "./Menu";

gsap.registerPlugin(useGSAP);

function Home() {
  useGSAP(() => {
    gsap.to(".appear", {
      y: -25,
      ease: "power4.out",
      duration: 1.5,
      stagger: 0.15,
    });
    gsap.from(".appear", { opacity: 0, duration: 1.2, stagger: 0.15 });
  });

  return (
    <>
      <div className="section h-screen">
        <div className="mx-96 pt-12 flex justify-between">
          <h1 className="text-5xl text-[#242038]">Rama</h1>
          <HamburgerMenu />
        </div>
        <div className="p-32 pt-64">
          <h1 className="appear text-center text-2xl text-[#242038]">
            Hey! I'm <span className="text-[#8332AC]"> Rama </span>
          </h1>
          <h2 className="mt-6 appear text-center text-5xl font-bold text-[#242038]">
            I transform ideas into <br /> functional and visually stunning{" "}
            <br />
            web experiences.
          </h2>
          <p className="mt-20 appear text-center text-2xl underline text-[#242038]">
            Let's create something amazing!
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
