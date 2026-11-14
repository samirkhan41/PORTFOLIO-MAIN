import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Skill Tree", "skill-tree"],
  ["Books", "books"],
  ["Contact", "contact"],
  ["Hire Me", "hire"],
];

export default function Footer() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={sectionRef}
      className={`flex flex-col gap-6 border-t border-dotted border-line px-5 py-7 transition-all duration-700 md:flex-row md:items-center md:justify-between md:px-7 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Brand */}
      <a
        href="#home"
        aria-label="Samir Khan portfolio home"
        className="group flex items-center gap-1.5 text-lg font-bold transition-transform duration-200 hover:scale-[1.02]"
      >
        <span>SAMIRK</span>
        <span className="text-[#ff5c35] font-black">.SITE</span>
        <span className="h-2 w-2 rounded-full bg-neon transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_#ffb035]" />
      </a>

      {/* Tagline */}
      <p className="font-mono text-[10px] text-gray-400">
        Full Stack Developer <span className="text-[#ff5c35]">|</span> Problem Solver{" "}
        <span className="text-neon">|</span> Lifelong Learner
      </p>

      {/* Navigation Links */}
      <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4">
        {links.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-1 font-mono text-[10px] text-gray-400 transition-colors duration-200 hover:text-neon"
          >
            <span>{label}</span>
            {label === "Contact" && (
              <ArrowUpRight
                size={11}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            )}
          </a>
        ))}
      </nav>

      {/* Back to Top & Copyright */}
      <div className="flex items-center gap-4">
        <button
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className="neo-btn-outline flex items-center gap-1.5 border border-line bg-panel px-3 py-1.5 font-mono text-[10px] text-gray-300 hover:border-neon hover:text-neon"
        >
          <span>TOP</span>
          <ArrowUp size={11} className="text-neon" />
        </button>

        <small className="font-mono text-[10px] text-gray-500">
          © {new Date().getFullYear()} Samir Khan
        </small>
      </div>
    </footer>
  );
}
