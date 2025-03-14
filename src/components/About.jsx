import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const horizontalRef = useRef(null);
  const parallaxRef = useRef(null);
  let isScrolling = false;

  const scrollToSection = direction => {
    if (isScrolling) return;
    isScrolling = true;

    const container = horizontalRef.current;
    const sectionWidth = container.offsetWidth;
    const shapes = parallaxRef.current.querySelectorAll("div");

    const scrollDistance = direction === "next" ? sectionWidth : -sectionWidth;

    // Mover el contenedor horizontal
    gsap.to(container, {
      scrollLeft: `+=${scrollDistance}`,
      duration: 1.5,
      ease: "power4.inOut",
      onComplete: () => {
        isScrolling = false;
      },
    });

    // Efecto paralaje en las figuras
    shapes.forEach((shape, index) => {
      const depth = index * 0.1 + 0.3; // Velocidad del paralaje
      const parallaxDistance = scrollDistance * depth;
      gsap.to(shape, {
        x: `-=${parallaxDistance}`,
        duration: 1.5,
        delay: 0.1,
        ease: "power4.inOut",
      });
    });
  };

  return (
    <div className="z-0 about-bg relative section h-screen flex items-center justify-center">
      <div id="parallax" ref={parallaxRef}>
        <div className="-z-10 absolute w-1/4 h-1/4 parallax-bg blur-md left-1/4 top-1/2" />
      </div>

      <div
        ref={horizontalRef}
        className="flex w-full h-full overflow-hidden snap-x snap-mandatory"
      >
        <div className="flex-shrink-0 flex flex-row w-full h-full ">
          <div className="flex flex-col m-24 space-y-14 items-center">
            <div>
              <h1 className="MuseoModerno text-8xl 3xl:text-9xl font-bold text-[#242038] cursor-default">
                I <span className="highlight">design</span>,{" "}
                <span className="highlight">code</span>,{" "}
                <span className="highlight">game</span> & <br />
                <span className="highlight">cycle</span>.
              </h1>
            </div>
            <div className="flex flex-row space-x-96">
              <div className="w-4/12 flex flex-col space-y-14">
                <p className="text-2xl 3xl:text-3xl text-[#242038] text-justify">
                  I'm a full-stack web developer based in Argentina with a love
                  for creativity, functionality, and impact. I'm
                  detail-oriented, always eager to learn, and I take pride in
                  approaching challenges with a positive mindset.
                </p>
                <p className="text-2xl 3xl:text-3xl text-[#242038] text-justify">
                  Let's scroll together and explores what makes me me!
                </p>
              </div>
              <div className="w-[400px]">
                <img src="me.JPEG" alt="Photo of me" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 w-full h-full">
          <h1 className="text-5xl font-bold">Horizontal Section 2</h1>
        </div>
        <div className="flex-shrink-0 w-full h-full">
          <h1 className="text-5xl font-bold">Horizontal Section 3</h1>
        </div>
      </div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-4">
        <button
          onClick={() => scrollToSection("prev")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Prev
        </button>
        <button
          onClick={() => scrollToSection("next")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
}
