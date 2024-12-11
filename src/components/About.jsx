import { useRef } from "react";
import { gsap } from "gsap";

export default function About() {
  const horizontalRef = useRef(null);
  let isScrolling = false;

  const scrollToSection = direction => {
    if (isScrolling) return;
    isScrolling = true;

    const container = horizontalRef.current;
    const sectionWidth = container.offsetWidth;

    gsap.to(container, {
      scrollLeft:
        direction === "next" ? "+=" + sectionWidth : "-=" + sectionWidth,
      duration: 0.5,
      ease: "power1.out",
      onComplete: () => {
        isScrolling = false;
      },
    });
  };

  return (
    <div className="relative section h-screen flex items-center justify-center">
      <div
        ref={horizontalRef}
        className="flex w-full h-full overflow-hidden snap-x snap-mandatory"
      >
        <div className="flex-shrink-0 w-full h-full m-6">
          <h1 className="MuseoModerno text-9xl font-bold text-[#242038] cursor-default">
            I <span className="highlight">design</span>,{" "}
            <span className="highlight">code</span>,{" "}
            <span className="highlight">game</span> & <br />
            <span className="highlight">cycle</span>.
          </h1>
          <p className="text-3xl text-[#242038] cursor-default w-1/4">
            I'm a full-stack web developer based in Argentina with a love for
            creativity, functionality, and impact. I'm detail-oriented, always
            eager to learn, and I take pride in approaching challenges with a
            positive mindset.
          </p>
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
