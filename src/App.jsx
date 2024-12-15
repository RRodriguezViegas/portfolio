import Home from "./components/Home";
import About from "./components/About.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Separador from "./components/Separador.jsx";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    setSections(sections);
    let isScrolling = false;

    // Detectar el scroll
    const handleScroll = e => {
      e.preventDefault(); // Evita ese mini scroll molesto, redundante por el overflow hidden
      if (isScrolling) return;
      isScrolling = true;

      const currentSection = Array.from(sections).findIndex(
        section =>
          section.getBoundingClientRect().top <= window.innerHeight &&
          section.getBoundingClientRect().bottom > 0
      );

      if (e.deltaY > 0) {
        // Scrolling hacia abajo
        if (currentSection < sections.length - 1) {
          gsap.to(window, {
            scrollTo: sections[currentSection + 1],
            duration: 0.3,
            ease: "power3.out",
            onComplete: () => {
              isScrolling = false;
            },
          });
        } else {
          isScrolling = false;
        }
      } else {
        // Scrolling hacia arriba
        if (currentSection > 0) {
          gsap.to(window, {
            scrollTo: sections[currentSection - 1],
            duration: 0.3,
            ease: "power3.out",
            onComplete: () => {
              isScrolling = false;
            },
          });
        } else {
          isScrolling = false;
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <Home />
      <Separador />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
