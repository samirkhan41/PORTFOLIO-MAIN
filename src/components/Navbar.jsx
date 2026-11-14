
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Compass, ChevronDown } from "lucide-react";

const sections = [
  { num: "01", label: "HOME", id: "home", desc: "Intro & Portrait" },
  { num: "02", label: "ABOUT", id: "about", desc: "Bio & Background" },
  { num: "03", label: "CAREER", id: "career", desc: "Education & Growth" },
  { num: "04", label: "PROJECTS", id: "projects", desc: "Selected Products" },
  { num: "05", label: "SKILL TREE", id: "skill-tree", desc: "Technical Arsenal" },
  { num: "06", label: "BOOKS", id: "books", desc: "Engineering Reads" },
  { num: "07", label: "CONTACT", id: "contact", desc: "Get In Touch" },
  { num: "08", label: "HIRE ME", id: "hire", desc: "Job / Freelance / Sponsor" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [quickNavOpen, setQuickNavOpen] = useState(false);

  const navDropdownRef = useRef(null);
  const navButtonRef = useRef(null);

  // Scroll listener and active section spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navDropdownRef.current &&
        !navDropdownRef.current.contains(e.target) &&
        navButtonRef.current &&
        !navButtonRef.current.contains(e.target)
      ) {
        setQuickNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const activeObj =
    sections.find((s) => s.id === activeSection) || sections[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
          : "border-b border-line/70 bg-ink/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-13 max-w-[1600px] items-center justify-between gap-3 border-x border-line px-3.5 sm:px-6">

        {/* Brand / Logo */}
        <a
          href="#home"
          aria-label="Samir Khan portfolio homepage"
          className="group flex shrink-0 items-center gap-1 text-sm sm:text-base font-bold tracking-tight transition-transform duration-200 hover:scale-[1.02]"
        >
          <span>SAMIRK</span>
          <span className="text-[#ff5c35] font-black">.SITE</span>
          <span className="h-1.5 w-1.5 rounded-full bg-neon transition-transform duration-300 group-hover:scale-150 group-hover:shadow-[0_0_8px_#ffb035]" />
        </a>

        {/* Right Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">

          {/* Quick Navigation */}
          <div className="relative">
            <button
              ref={navButtonRef}
              type="button"
              onClick={() => setQuickNavOpen((prev) => !prev)}
              aria-expanded={quickNavOpen}
              aria-label="Toggle section navigation menu"
              className="neo-btn-outline group flex items-center gap-1.5 border border-dotted border-line bg-panel px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[10px] sm:text-[11px] text-gray-300 transition-all duration-200 hover:border-[#ff5c35] hover:text-[#ff5c35]"
            >
              <Compass
                size={12}
                className="text-neon transition-transform duration-300 group-hover:rotate-45"
              />

              <span className="font-semibold text-[#ff5c35]">
                {activeObj.num}
              </span>

              <span>// {activeObj.label}</span>

              <ChevronDown
                size={11}
                className={`text-gray-400 transition-transform duration-200 ${
                  quickNavOpen ? "rotate-180 text-neon" : ""
                }`}
              />
            </button>

            {/* Compact Scrollable Dropdown */}
            {quickNavOpen && (
              <div
                ref={navDropdownRef}
                className="cyber-corner fixed right-3 sm:right-6 top-[58px] z-[60] w-[210px] max-h-[45vh] overflow-y-auto overflow-x-hidden overscroll-contain border border-dotted border-neon/80 bg-ink p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.85)] backdrop-blur-xl animate-fade-in"
              >
                {/* Dropdown Header */}
                <div className="mb-1 flex items-center justify-between border-b border-dotted border-line pb-1 font-mono text-[8px]">
                  <span className="text-[#ff5c35] font-bold">
                    // QUICK RADAR JUMP
                  </span>

                  <span className="text-gray-500">
                    08 SECTIONS
                  </span>
                </div>

                {/* Section Links */}
                <div className="flex flex-col gap-0.5">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id;
                    const isHire = sec.id === "hire";

                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={() => setQuickNavOpen(false)}
                        className={`group flex shrink-0 items-center justify-between gap-1 border border-dotted border-transparent px-1.5 py-1 font-mono text-[9px] transition-all duration-150 ${
                          isActive
                            ? "border-neon/60 bg-neon/10 font-bold text-neon"
                            : isHire
                            ? "text-[#ff5c35] border-[#ff5c35]/40 hover:bg-[#ff5c35]/10 font-semibold"
                            : "text-gray-300 hover:border-line hover:bg-panel hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <span
                            className={`text-[8px] ${
                              isActive
                                ? "text-neon"
                                : isHire
                                ? "text-[#ff5c35]"
                                : "text-gray-500"
                            }`}
                          >
                            [{sec.num}]
                          </span>

                          <span>{sec.label}</span>
                        </div>

                        <span
                          className={`text-[8px] text-right ${
                            isHire
                              ? "text-[#ff5c35]/80 font-bold"
                              : "text-gray-500 group-hover:text-gray-400"
                          }`}
                        >
                          {sec.desc}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* CTA Let's Talk Button */}
          <a
            href="#contact"
            className="neo-btn-primary flex items-center gap-1 bg-neon px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[10px] sm:text-[11px] font-bold text-ink"
          >
            <span>LET'S TALK</span>

            <ArrowUpRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
