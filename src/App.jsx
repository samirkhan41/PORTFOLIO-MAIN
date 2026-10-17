import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import Projects from "./components/Projects";
import SkillTree from "./components/SkillTree";
import Bookshelf from "./components/Bookshelf";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hire from "./pages/Hire";
import CyberBackground from "./components/CyberBackground";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentRoute, setCurrentRoute] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.hash === "#hire" || window.location.pathname === "/hire"
        ? "hire"
        : "home";
    }
    return "home";
  });

  useEffect(() => {
    const handleHashChange = () => {
      const isHire =
        window.location.hash === "#hire" || window.location.pathname === "/hire";
      setCurrentRoute(isHire ? "hire" : "home");
      if (isHire) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  // Synchronize document title with active route
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.title =
        currentRoute === "hire"
          ? "Hire Samir Khan | Full Stack & MERN Stack Developer"
          : "Samir Khan | Full Stack & MERN Stack Developer";
    }
  }, [currentRoute]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress((window.scrollY / totalHeight) * 100);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToPortfolio = () => {
    if (window.location.hash === "#hire") {
      window.location.hash = "#home";
    }
    setCurrentRoute("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto min-h-screen max-w-[1600px] overflow-hidden border-x border-line bg-ink text-[#f4f5f0]">
      {/* Scroll Progress Indicator Bar with Dual Orange & Amber Gold Gradient */}
      <div
        className="fixed top-0 left-0 z-[60] h-[2px] bg-gradient-to-r from-[#ff5c35] via-[#ff8a35] to-neon shadow-[0_0_10px_rgba(255,92,53,0.8)] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      {/* Unified Fixed Cyber World: Moon, Moving Backdrop, Blinking Lights, CRT Scanlines, Parallax */}
      <CyberBackground />

      {/* Route Switcher: Hire Page vs Main Portfolio */}
      {currentRoute === "hire" ? (
        <Hire onBack={handleBackToPortfolio} />
      ) : (
        <div className="relative z-10">
          <Navbar />
          <main className="pt-16">
            <Hero />
            <About />
            <Career />
            <Projects />
            <SkillTree />
            <Bookshelf />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
