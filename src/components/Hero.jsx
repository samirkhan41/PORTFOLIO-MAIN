import { useState, useEffect, useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const terminalLines = [
  { label: "> Name:", val: "Samir Khan" },
  { label: "> Role:", val: "Full Stack Developer" },
  { label: "> Education:", val: "B.Tech CSE" },
  { label: "> University:", val: "Tulas university" },
  { label: "> CGPA:", val: "8.0 / 10" },
  { label: "> Location:", val: "Dehradun, India" },
  { label: "> Stack:", val: "MERN, DevOps, AI Tools" },
];

export default function Hero() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  
  const fullCommand = "whoami";
  // Terminal typing animation state with lazy initialization for reduced motion
  const [typedCommand, setTypedCommand] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? fullCommand
      : ""
  );
  const [visibleLinesCount, setVisibleLinesCount] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? terminalLines.length
      : 0
  );

  // Desktop mouse parallax state for portrait
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const portraitRef = useRef(null);

  // Interactive Cyber Overdrive Aura mode state (triggered on hover or click)
  const [isAuraLocked, setIsAuraLocked] = useState(false);
  const [isAuraHovered, setIsAuraHovered] = useState(false);
  const [triggerFlash, setTriggerFlash] = useState(false);

  const isAuraActive = isAuraLocked || isAuraHovered;

  const toggleAura = () => {
    setTriggerFlash(true);
    setIsAuraLocked((prev) => !prev);
    setTimeout(() => setTriggerFlash(false), 450);
  };

  // Run terminal typing animation once when visible
  useEffect(() => {
    if (!isVisible) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        // Reveal terminal output lines sequentially
        let lineIdx = 0;
        const lineInterval = setInterval(() => {
          lineIdx++;
          setVisibleLinesCount(lineIdx);
          if (lineIdx >= terminalLines.length) {
            clearInterval(lineInterval);
          }
        }, 140);
      }
    }, 90);

    return () => clearInterval(typeInterval);
  }, [isVisible]);

  // Subtle mouse parallax handler for capable desktop devices
  const handleMouseMove = (e) => {
    if (!portraitRef.current || window.innerWidth < 1024) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: -y * 6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="border-b border-dotted border-line px-5 py-8 sm:px-8 sm:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Grid with Gaps between Standalone Dotted Border Components */}
        <div className="grid items-stretch gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Introduction Card Component */}
          <div className="cyber-corner flex flex-col justify-between gap-6 border border-dotted border-line/90 bg-panel/30 p-6 sm:p-8 lg:col-span-5 transition-colors hover:border-line">
            <div>
             

              <div
                className={`mb-4 inline-flex w-fit items-center gap-2 border border-dotted border-[#ff5c35]/60 bg-panel/80 px-3 py-1 font-mono text-xs tracking-wider text-neon transition-all duration-500 delay-75 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                <span>FULL STACK DEVELOPER</span>
              </div>

              <h1 className="mb-5 text-5xl font-bold leading-[.9] tracking-[-.06em] sm:text-7xl">
                <span
                  className={`inline-block transition-all duration-700 delay-150 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  HI, I'M
                </span>
                <br />
                <span
                  className={`inline-block transition-all duration-700 delay-225 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  SAMIR{" "}
                  <span className="text-[#ff5c35] transition-colors duration-300 drop-shadow-[0_0_16px_rgba(255,92,53,0.35)]">
                    KHAN.
                  </span>
                </span>
                <span className="sr-only"> — Full Stack &amp; MERN Stack Developer Portfolio</span>
              </h1>

              <p
                className={`font-mono text-xs leading-6 text-gray-400 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                A MERN Stack Developer who loves turning ideas into real-world
                products. I enjoy building web applications, exploring new
                technologies and learning every day.
              </p>
            </div>

            {/* Action Buttons & Socials */}
            <div>
              <div
                className={`flex flex-wrap gap-3 transition-all duration-700 delay-375 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="/samirResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Samir Khan resume PDF in new tab"
                  className="neo-btn-primary flex items-center gap-2 bg-neon px-4 py-3 font-mono text-xs font-bold text-ink"
                >
                  <span>VIEW RESUME</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>

                <a
                  href="#hire"
                  aria-label="Navigate to hire inquiry section"
                  className="flex items-center gap-2 border border-dotted border-line bg-panel/80 px-4 py-3 font-mono text-xs font-bold text-gray-200 transition-all duration-200 hover:border-neon hover:text-neon hover:bg-neon/10 hover:shadow-[0_0_14px_rgba(255,176,53,0.25)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>HIRE ME</span>
                  <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* Social Links with Dotted Border Badges */}
              <div
                className={`mt-6 flex flex-wrap gap-2.5 font-mono text-xs text-gray-300 transition-all duration-700 delay-450 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <a
                  href="https://github.com/samirkhan41"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Samir Khan GitHub profile (opens in new tab)"
                  className="flex items-center gap-1.5 border border-dotted border-line/90 bg-panel/50 px-3 py-1.5 transition-colors duration-200 hover:border-neon hover:text-neon"
                >
                  <span aria-hidden="true" className="text-neon">⌘</span> GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/samir-khan-649158358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Samir Khan LinkedIn profile (opens in new tab)"
                  className="border border-dotted border-line/90 bg-panel/50 px-3 py-1.5 transition-colors duration-200 hover:border-neon hover:text-neon"
                >
                  LinkedIn ↗
                </a>

                <a
                  href="https://leetcode.com/u/samirkhan07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Samir Khan LeetCode profile (opens in new tab)"
                  className="border border-dotted border-line/90 bg-panel/50 px-3 py-1.5 transition-colors duration-200 hover:border-neon hover:text-neon"
                >
                  LeetCode ↗
                </a>

                <a
                  href="https://www.instagram.com/sftsamir19"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Samir Khan Instagram profile (opens in new tab)"
                  className="border border-dotted border-line/90 bg-panel/50 px-3 py-1.5 transition-colors duration-200 hover:border-neon hover:text-neon"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Terminal Card & LeetCode Column */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-3">
            <div className="cyber-corner border border-dotted border-line bg-panel shadow-[0_6px_28px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-line/90">
              <div className="flex items-center gap-2 border-b border-dotted border-line px-4 py-3.5 font-mono text-xs text-neon">
                <span aria-hidden="true" className="inline-block text-sm animate-pulse">▣</span>
                <span className="font-semibold tracking-wide">samir@portfolio:~$ {typedCommand}</span>
                {typedCommand.length < fullCommand.length && (
                  <span className="inline-block font-bold animate-terminal-blink">_</span>
                )}
              </div>

              <div className="min-h-[235px] sm:min-h-[260px] space-y-1.5 p-4 sm:p-5 font-mono text-xs sm:text-[12.5px] leading-relaxed text-gray-200">
                {terminalLines.map((line, idx) => (
                  <div
                    key={line.label}
                    className={`terminal-line-item flex items-center justify-between ${
                      idx < visibleLinesCount
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2 pointer-events-none"
                    }`}
                  >
                    <div>
                      <span className="term-label text-neon font-semibold transition-colors duration-200">
                        {line.label}
                      </span>{" "}
                      <span className="term-val text-gray-200 transition-colors duration-200">
                        {line.val}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className="term-dot opacity-0 font-mono text-[10px] text-neon transition-opacity duration-200"
                    >
                      ●
                    </span>
                  </div>
                ))}

                {visibleLinesCount >= terminalLines.length && (
                  <div className="terminal-line-item pt-2 text-neon transition-all duration-200 font-semibold cursor-default">
                    samir@portfolio:~$ <span className="inline-block animate-terminal-blink">_</span>
                  </div>
                )}
              </div>
            </div>

            {/* LeetCode Achievement Card (Replaced Quote Card) */}
            <a
              href="https://leetcode.com/u/samirkhan07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Samir Khan's 100+ LeetCode solved problems profile (opens in new tab)"
              className="cyber-corner group flex flex-col justify-between border border-dotted border-line bg-panel p-4 sm:p-5 transition-all duration-300 hover:border-neon hover:shadow-[0_4px_20px_rgba(255,176,53,0.15)] hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center gap-1.5 font-bold text-neon">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                  <span>// LEETCODE</span>
                </div>
                <span className="border border-dotted border-neon/60 bg-ink px-2 py-0.5 text-[9px] font-bold text-neon transition-colors group-hover:border-neon group-hover:bg-neon group-hover:text-ink">
                  100+ SOLVED ↗
                </span>
              </div>

              <div className="my-2 flex items-baseline gap-2">
                <span className="font-mono text-3xl font-black text-neon">100+</span>
                <span className="font-mono text-xs font-semibold text-gray-200">Problems Solved</span>
              </div>

              <p className="mb-0 font-mono text-[11px] leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                Active problem solver on LeetCode. Data Structures, Algorithms & Logic Building.
              </p>
            </a>
          </div>

          {/* Column 3: Front Portrait (100% Transparent, No Border, Exact Fiery Aura on Hover & Click) */}
          <div className="flex items-end justify-center lg:col-span-4 border-0 border-none bg-transparent">
            <div
              ref={portraitRef}
              onClick={toggleAura}
              onMouseEnter={() => setIsAuraHovered(true)}
              onMouseLeave={(e) => {
                setIsAuraHovered(false);
                handleMouseLeave(e);
              }}
              onMouseMove={handleMouseMove}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleAura();
                }
              }}
              aria-label="Samir Khan portrait"
              style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: "transform 0.15s ease-out",
              }}
              className={`samir-cutout-container group relative flex flex-col items-center justify-end w-full max-w-[450px] min-h-[500px] sm:min-h-[570px] border-0 border-none bg-transparent select-none cursor-pointer transition-all duration-700 delay-300 ${
                isAuraActive ? "aura-active" : ""
              } ${isVisible ? "opacity-100" : "opacity-0"}`}
            >
              {/* Ambient Radial Flame Halo (Silky Butter-Smooth Opacity Crossfade) */}
              <div className="samir-ambient-halo" />

              {/* Portrait & Ground Shadow Assembly */}
              <div className="relative flex items-end justify-center w-full">
                {/* Realistic Ground / Feet Contact Shadow under frontsamir */}
                <div className="samir-feet-shadow-container">
                  <div className="samir-ground-shadow" />
                  <div className="samir-contact-shadow" />
                  <div className="samir-ground-glow" />
                </div>

                {/* Base Clean Transparent Portrait Cutout (frontsamir.png - Primary LCP Element) */}
                <img
                  src="/images/frontsamir.png"
                  alt="Samir Khan - Full Stack and MERN Stack Developer portrait"
                  width="450"
                  height="570"
                  fetchPriority="high"
                  decoding="async"
                  className="samir-cutout-base relative z-10"
                />

                {/* Refined Soft Cyber Aura Layer (Silky Butter-Smooth Opacity Crossfade) */}
                <img
                  src="/images/frontsamir.png"
                  alt=""
                  aria-hidden="true"
                  width="450"
                  height="570"
                  fetchPriority="high"
                  className="samir-cutout-aura z-20"
                />
              </div>

              {/* Clean Impactful Tagline directly below Portrait */}
              <div className="relative z-20 mt-3 flex flex-col items-center gap-1.5 text-center pointer-events-none">
                <div className="inline-flex items-center gap-2 border border-dotted border-[#ff5c35]/50 bg-ink/85 px-3.5 py-1 backdrop-blur-md shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse shadow-[0_0_8px_#ffb035]" />
                  <span className="font-mono text-xs font-bold tracking-wider text-gray-100">
                    CRAFTING DIGITAL EXPERIENCES
                  </span>
                </div>
                <p className="font-mono text-[10.5px] tracking-widest text-gray-400">
                  CLEAN ARCHITECTURE <span className="text-[#ff5c35]">●</span> MODERN WEB <span className="text-neon">●</span> HIGH IMPACT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}