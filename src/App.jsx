import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Separador from "./components/Separador.jsx";
import SeparadorPC from "./components/SeparadorPC.jsx";
import SeparadorFinal from "./components/Separador-final.jsx";
import ElFortinDetail from "./components/El-Fortin-Detail.jsx";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function AppContent() {
  const [sections, setSections] = useState([]);
  const location = useLocation();
  const isDesktop = () => window.innerWidth > 1440;

  if (isDesktop()) {
    useEffect(() => {
      const sections = document.querySelectorAll(".section");
      setSections(sections);
      let isScrolling = false;

      // Detectar el scroll
      const handleScroll = e => {
        // e.preventDefault(); // Evita ese mini scroll molesto, redundante por el overflow hidden
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
              duration: 2,
              ease: "power3.inOut",
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
              duration: 2,
              ease: "power3.inOut",
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

      // Forzar el scroll al inicio al cambiar de ruta
      gsap.to(window, { scrollTo: 0, duration: 0 });

      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, [location.pathname]);
  }

  return (
    <Routes>
      {/* Ruta por defecto: Muestra los componentes normales con scroll */}
      <Route
        path="/"
        element={
          <>
            <Home sections={sections} />
            <Separador />
            <Projects />
            {/* <SeparadorPC /> */}
            <Separador />
            <Contact />
            <Separador />
            {/* <SeparadorFinal /> */}
            <Footer sections={sections} />
          </>
        }
      />

      {/* Ruta específica: Solo muestra el componente detalle */}
      <Route
        path="/elfortin"
        element={
          <>
            <ElFortinDetail />
          </>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
