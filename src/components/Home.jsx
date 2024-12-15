import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import HamburgerMenu from "./Menu";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

function Home({ sections }) {
  useGSAP(() => {
    gsap.to(".appear", {
      y: -25,
      ease: "power4.out",
      duration: 1.5,
      stagger: 0.15,
    });
    gsap.from(".appear", { opacity: 0, duration: 1.2, stagger: 0.15 });

    gsap.to(".left-bar", { rotate: 25, duration: 0.6, x: 2, delay: 2.6 });
    gsap.to(".right-bar", { rotate: -25, duration: 0.6, x: -2, delay: 2.6 });

    gsap.to(".left-bar", {
      y: -10,
      duration: 1,
      delay: 3.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
    gsap.to(".right-bar", {
      y: -10,
      duration: 1,
      delay: 3.2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.from(".left-bar", { opacity: 0, duration: 1.2, delay: 2.8 });
    gsap.from(".right-bar", { opacity: 0, duration: 1.2, delay: 2.8 });

    gsap.to(".rama", {
      text: "Rama",
      duration: 1,
      ease: "power4.out",
      delay: 0.4,
    });
  });

  return (
    <>
      <div className="section h-screen relative">
        <div className="mx-96 pt-12 flex justify-between">
          <h1 className="text-5xl text-[#242038]">Rama</h1>
          <HamburgerMenu sections={sections} />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="appear text-2xl text-[#242038]">
              Hey! I'm{" "}
              <span className="inline-block rama text-[#8332AC]"> aRam </span>
            </h1>
            <h2 className="mb-16 mt-6 appear text-5xl font-bold text-[#242038]">
              I transform ideas into <br /> functional and visually stunning{" "}
              <br />
              web experiences.
            </h2>
            <p className="appear text-2xl underline text-[#242038]">
              <a href="#">Let's create something amazing!</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center absolute left-[calc(50%-36px)] bottom-20">
          <span className={`left-bar h-0.5 bg-[#242038] rounded-xl w-9`}></span>
          <span
            className={`right-bar h-0.5 bg-[#242038] rounded-xl w-9`}
          ></span>
        </div>
      </div>
    </>
  );
}

export default Home;
