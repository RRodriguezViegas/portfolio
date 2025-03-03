import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HamburgerMenu from "./Menu";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Home({ sections }) {
  const isDesktop = () => window.innerWidth > 1024;

  useEffect(() => {
    if (isDesktop()) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useGSAP(() => {
    gsap.to(".appear", {
      y: -25,
      ease: "power4.out",
      duration: 1.5,
      stagger: 0.15,
    });
    gsap.from(".appear", { opacity: 0, duration: 1.2, stagger: 0.15 });

    gsap.to(".pr-appear", {
      scrollTrigger: {
        trigger: ".pr-appear",
        start: "top bottom",
        toggleActions: "restart pause resume pause",
      },
      y: -25,
      ease: "power4.out",
      duration: 1.5,
      stagger: 0.15,
    });
    gsap.from(".pr-appear", {
      scrollTrigger: {
        trigger: ".pr-appear",
        start: "top bottom",
        toggleActions: "restart pause resume pause",
      },
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
    });

    gsap.to(".ct-appear", {
      scrollTrigger: {
        trigger: ".ct-appear",
        start: "top bottom",
        toggleActions: "restart pause resume pause",
      },
      y: -25,
      ease: "power4.out",
      duration: 1.5,
      stagger: 0.15,
    });
    gsap.from(".ct-appear", {
      scrollTrigger: {
        trigger: ".ct-appear",
        start: "top bottom",
        toggleActions: "restart pause resume pause",
      },
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
    });

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
      duration: 2.3,
      ease: "power4.out",
      delay: 0.6,
    });

    gsap.to(".parallax-blob-rot-1", {
      rotateZ: 360,
      duration: 50,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".parallax-blob-rot-2", {
      rotateZ: 360,
      duration: 30,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".parallax-blob-2", {
      y: 20,
      x: 80,
      rotateZ: -45,
      duration: 30,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.from(".bg-appear", {
      ease: "power4.out",
      opacity: 0,
      duration: 1.2,
      stagger: 0.4,
    });
  });

  return (
    <>
      <div className="bg-appear home-bg section h-screen relative flex justify-center">
        <div className="absolute w-1/2 h-screen left-0 flex flex-col justify-center bg-[#3a5bff3a] blur-3xl">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-96 top-60 blur-3xl"
          >
            <path
              fill="#06c9ff80"
              d="M27.8,-23.9C42,-4.4,63.5,7.5,61.5,13.1C59.5,18.7,33.9,18.1,13.7,27.4C-6.5,36.7,-21.4,56,-38.1,56.6C-54.8,57.2,-73.3,39.1,-74.1,21C-74.9,3,-58.1,-14.9,-42.8,-34.7C-27.5,-54.5,-13.7,-76.2,-3.5,-73.4C6.8,-70.7,13.6,-43.5,27.8,-23.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-72 top-60 blur-3xl"
          >
            <path
              fill="#0f3fff80"
              d="M27.8,-23.9C42,-4.4,63.5,7.5,61.5,13.1C59.5,18.7,33.9,18.1,13.7,27.4C-6.5,36.7,-21.4,56,-38.1,56.6C-54.8,57.2,-73.3,39.1,-74.1,21C-74.9,3,-58.1,-14.9,-42.8,-34.7C-27.5,-54.5,-13.7,-76.2,-3.5,-73.4C6.8,-70.7,13.6,-43.5,27.8,-23.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-96 -top-96 blur-3xl"
          >
            <path
              fill="#06c9ff80"
              d="M7.4,0.9C12,11.7,19.7,24.7,9.7,37.8C-0.3,50.8,-28.1,63.9,-34.4,57C-40.7,50.2,-25.5,23.4,-16.2,6.1C-6.8,-11.2,-3.4,-19,-1,-18.7C1.4,-18.3,2.8,-9.9,7.4,0.9Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-44 top-96 blur-3xl"
          >
            <path
              fill="#06c9ff80"
              d="M38.3,-29.2C54.7,-21.9,76.5,-10.9,81.8,5.3C87.1,21.5,75.8,43.1,59.4,50.1C43.1,57.2,21.5,49.9,3.1,46.8C-15.3,43.7,-30.7,44.9,-43.4,37.8C-56.1,30.7,-66.1,15.3,-61.5,4.7C-56.8,-6,-37.4,-12,-24.7,-19.3C-12,-26.6,-6,-35.1,2.5,-37.6C10.9,-40.1,21.9,-36.5,38.3,-29.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-80 -top-96 blur-3xl parallax-blob-rot-1"
          >
            <path
              fill="#0f3fff80"
              d="M27.4,-30.7C36.4,-18.5,45.1,-9.2,49.1,4C53.1,17.2,52.4,34.4,43.4,43.3C34.4,52.2,17.2,52.7,-2.7,55.3C-22.5,58,-45.1,62.8,-60.5,53.9C-75.9,45.1,-84.2,22.5,-79.6,4.6C-75,-13.4,-57.7,-26.8,-42.3,-39.1C-26.8,-51.3,-13.4,-62.3,-2.1,-60.2C9.2,-58.1,18.5,-42.9,27.4,-30.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-80 -top-32 blur-3xl parallax-blob-rot-2"
          >
            <path
              fill="#06c9ff80"
              d="M22.1,-37.1C22.6,-21.7,12.7,-10.8,7.4,-5.3C2.1,0.2,1.4,0.4,0.9,9.1C0.4,17.7,0.2,34.8,-10.2,45C-20.6,55.2,-41.1,58.4,-49.5,49.8C-58,41.1,-54.2,20.6,-55,-0.7C-55.7,-22,-60.9,-44.1,-52.5,-59.5C-44.1,-74.9,-22,-83.7,-5.6,-78.1C10.8,-72.5,21.7,-52.5,22.1,-37.1Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-80 top-80 blur-3xl parallax-blob-rot-1"
          >
            <path
              fill="#0f3fff80"
              d="M54.2,-43C68.6,-39.9,77.4,-19.9,69,-8.4C60.5,3.1,34.9,6.1,20.5,16.5C6.1,26.9,3.1,44.7,0.1,44.5C-2.8,44.4,-5.7,26.5,-11.9,16.1C-18.1,5.7,-27.6,2.8,-32.2,-4.6C-36.8,-12.1,-36.5,-24.1,-30.3,-27.2C-24.1,-30.3,-12.1,-24.4,3.9,-28.4C19.9,-32.3,39.9,-46.1,54.2,-43Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-96 top-80 blur-3xl parallax-blob-rot-1"
          >
            <path
              fill="#06c9ff80"
              d="M54.2,-43C68.6,-39.9,77.4,-19.9,69,-8.4C60.5,3.1,34.9,6.1,20.5,16.5C6.1,26.9,3.1,44.7,0.1,44.5C-2.8,44.4,-5.7,26.5,-11.9,16.1C-18.1,5.7,-27.6,2.8,-32.2,-4.6C-36.8,-12.1,-36.5,-24.1,-30.3,-27.2C-24.1,-30.3,-12.1,-24.4,3.9,-28.4C19.9,-32.3,39.9,-46.1,54.2,-43Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-96 -top-52 blur-3xl parallax-blob-rot-1"
          >
            <path
              fill="#0f3fff80"
              d="M54.2,-43C68.6,-39.9,77.4,-19.9,69,-8.4C60.5,3.1,34.9,6.1,20.5,16.5C6.1,26.9,3.1,44.7,0.1,44.5C-2.8,44.4,-5.7,26.5,-11.9,16.1C-18.1,5.7,-27.6,2.8,-32.2,-4.6C-36.8,-12.1,-36.5,-24.1,-30.3,-27.2C-24.1,-30.3,-12.1,-24.4,3.9,-28.4C19.9,-32.3,39.9,-46.1,54.2,-43Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -left-96 top-36 blur-3xl parallax-blob-2"
          >
            <path
              fill="#06c9ff80"
              d="M44.4,-58.2C44.7,-44.1,23.2,-22.1,13.8,-9.4C4.4,3.3,7.2,6.7,7,20.7C6.7,34.6,3.3,59.3,-6.9,66.2C-17.2,73.1,-34.3,62.3,-44.4,48.3C-54.5,34.3,-57.6,17.2,-56.6,1C-55.6,-15.1,-50.4,-30.2,-40.3,-44.2C-30.2,-58.3,-15.1,-71.3,3.5,-74.8C22.1,-78.3,44.1,-72.3,44.4,-58.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-96 -left-96 blur-3xl parallax-blob-rot-1"
          >
            <path
              fill="#0f3fff80"
              d="M24.9,8.4C17,27.9,-15,27.5,-23.2,7.8C-31.3,-12,-15.7,-51.1,0.3,-50.9C16.4,-50.7,32.7,-11.2,24.9,8.4Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-1/2 blur-3xl parallax-blob-rot-2"
          >
            <path
              fill="#0f3fff80"
              d="M48.8,-38.6C58.5,-26.7,58.4,-6.7,52.3,8.8C46.3,24.3,34.3,35.2,18.6,45.4C2.9,55.5,-16.4,64.8,-35.6,60.6C-54.8,56.5,-74,38.9,-76.7,19.6C-79.5,0.3,-65.8,-20.6,-50.2,-33.8C-34.7,-47.1,-17.3,-52.7,1.1,-53.5C19.5,-54.4,39.1,-50.6,48.8,-38.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute blur-3xl parallax-blob-rot-1"
          >
            <path
              fill="#9028ff80"
              d="M41,-61.8C48.8,-50.8,47.7,-33,43.8,-20.1C39.9,-7.3,33.1,0.7,33.1,13.8C33,26.9,39.6,45.2,35.2,53.7C30.8,62.1,15.4,60.6,1,59.3C-13.4,57.9,-26.7,56.6,-35.4,49.5C-44,42.4,-47.8,29.6,-52.5,16.7C-57.2,3.8,-62.8,-9.2,-61.7,-22.3C-60.6,-35.5,-52.8,-48.7,-41.4,-58.6C-30,-68.4,-15,-74.8,0.8,-75.9C16.6,-77,33.2,-72.8,41,-61.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute blur-3xl parallax-blob-rot-2"
          >
            <path
              fill="#06c9ff80"
              d="M30.4,-31.7C45,-31.2,66.3,-29.8,77.5,-19.5C88.7,-9.1,89.9,10.2,80.7,22.4C71.5,34.6,52,39.6,36.8,51C21.6,62.4,10.8,80.2,-1.7,82.5C-14.1,84.7,-28.3,71.5,-37.1,58.1C-46,44.7,-49.7,31,-58.1,16.2C-66.6,1.5,-79.8,-14.4,-76,-24.2C-72.1,-34,-51.2,-37.9,-35.7,-38C-20.2,-38.2,-10.1,-34.7,-1.1,-33.2C7.9,-31.7,15.8,-32.2,30.4,-31.7Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="w-3/4 pt-12 flex justify-between z-10">
          <h1 className="text-5xl text-[#242038]">&lt;Rama /&gt;</h1>
          <HamburgerMenu sections={sections} />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center h-full">
          <div className="flex flex-col items-center">
            <h1 className="z-50 appear text-3xl text-[#242038]">
              Hola! Soy{" "}
              <span className="inline-block rama text-[#3234ac]"> #%@& </span>
            </h1>
            <h2 className="z-50 mb-16 mt-6 appear text-5xl font-semibold text-[#242038]">
              Transformo ideas 💡 en <br /> experiencias web funcionales ✨{" "}
              <br />y atractivas. 🔥
            </h2>
            <p className="z-50 appear text-2xl underline text-[#242038]">
              <a href="#">Hagamos posible tu proyecto!</a>
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
