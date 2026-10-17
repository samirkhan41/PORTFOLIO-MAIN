import { ArrowUpRight } from "lucide-react";
import { useScrollReveal, useCounterAnimation } from "../hooks/useScrollReveal";

const facts = [
  [
    "01",
    "WHO AM I?",
    "A B.Tech CSE student and Full Stack Developer who enjoys building web applications.",
  ],
  [
    "02",
    "WHAT I DO?",
    "I build and experiment with web technologies, APIs and real-world products.",
  ],
  [
    "03",
    "GOAL?",
    "Create impactful products and grow as a developer.",
  ],
];

// Subcomponent: Animated Statistic Card (Preserves existing border)
function StatItem({ value, suffix = "", label, color = "neon" }) {
  const isOrange = color === "orange";
  return (
    <div className="border border-line/70 bg-panel/70 p-3 transition-colors hover:border-line">
      <div className={`font-mono text-xl font-bold sm:text-2xl ${isOrange ? "text-[#ff5c35]" : "text-neon"}`}>
        {value}
        {suffix && <span className="text-xs text-gray-500">{suffix}</span>}
      </div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-gray-400">
        {label}
      </div>
    </div>
  );
}

// Subcomponent: Transparent Developer Workstation (Clean Neo-Brutalist Style)
function AboutPortrait({ isVisible }) {
  return (
    <div
      className={`relative flex w-full max-w-[540px] flex-col justify-center border-0 border-none bg-transparent transition-all duration-500 delay-150 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-dotted border-line/90 pb-2.5 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-neon animate-pulse shadow-[0_0_8px_#ffb035]" />
          <span className="font-bold tracking-wider text-gray-200">
            [ SAMIR_KHAN ]
          </span>
        </div>
      </div>

      {/* Transparent Workstation Cutout Frame */}
      <div className="relative my-4 flex items-center justify-center border-0 border-none bg-transparent">
        {/* 100% Transparent Cutout Image of Samir at his Workstation */}
        <img
          src="/images/heroImage.png"
          alt="Samir Khan developer workstation with code editor, dual monitors, and MERN development setup"
          width="1024"
          height="714"
          loading="lazy"
          decoding="async"
          className="workstation-cutout relative z-10 w-full h-auto object-contain select-none"
        />
      </div>
    </div>
  );
}

// Subcomponent: Compact Question / Fact Card (Preserves existing solid border)
function FactCard({ num, title, description, index, isVisible }) {
  const isOrange = index % 2 === 0;

  return (
    <article
      style={{
        transitionDelay: `${200 + index * 90}ms`,
      }}
      className={`group cyber-corner border border-line bg-panel p-4 transition-all duration-300 ${isOrange
          ? "hover:border-[#ff5c35] hover:shadow-[0_6px_22px_rgba(255,92,53,0.14)]"
          : "hover:border-neon hover:shadow-[0_6px_22px_rgba(255,176,53,0.18)]"
        } hover:-translate-y-1.5 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >
      <div className={`flex items-center justify-between font-mono text-[11px] ${isOrange ? "text-[#ff5c35]" : "text-neon"}`}>
        <span className="font-semibold tracking-wider">
          [{num}] {title}
        </span>
        <ArrowUpRight
          size={14}
          className={`text-gray-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isOrange ? "group-hover:text-[#ff5c35]" : "group-hover:text-neon"
            }`}
        />
      </div>

      <p className="mb-0 mt-2 font-mono text-[11px] leading-relaxed text-gray-300">
        {description}
      </p>
    </article>
  );
}

// Main Component: About Section
export default function About() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  // Animated statistics
  const countProjects = useCounterAnimation(3, 1000, isVisible);
  const countExperience = useCounterAnimation(3, 1000, isVisible);
  const countSkills = useCounterAnimation(15, 1200, isVisible);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="border-b border-line px-6 py-20 sm:px-10 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Grid with Generous Spacing and Balanced Columns */}
        <div className="grid items-stretch gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Column 1: Heading, Bio & Animated Stats (Component with Dotted Border) */}
          <div className="cyber-corner flex flex-col justify-between gap-6 border border-dotted border-line/90 bg-panel/40 p-6 sm:p-7 lg:col-span-4 transition-colors hover:border-line">
            <div>
          

              <h2
                className={`text-4xl font-bold leading-none tracking-tight sm:text-5xl transition-all duration-700 delay-75 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
              >
                A BIT
                <br />
                ABOUT <span className="text-[#ff5c35]">ME.</span>
              </h2>

              <p
                className={`mt-4 font-mono text-xs leading-6 text-gray-400 transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
              >
                Curious Learner. Problem Solver. Always Building.
              </p>
            </div>

            {/* Real Statistics Counter Bar */}
            <div
              className={`grid grid-cols-3 gap-2.5 border-t border-dotted border-line/80 pt-6 transition-all duration-700 delay-225 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
              <StatItem
                value={`0${countProjects}`}
                suffix="+"
                label="Projects"
                color="neon"
              />
              <StatItem
                value={`0${countExperience}`}
                label="Roles"
                color="orange"
              />
              <StatItem
                value={countSkills}
                suffix="+"
                label="Skills"
                color="neon"
              />
            </div>
          </div>

          {/* Column 2: Centered Portrait Card (Preserves existing solid border) */}
          <div className="flex items-center justify-center lg:col-span-4">
            <AboutPortrait isVisible={isVisible} />
          </div>

          {/* Column 3: 3 Compact Questions Component with Dotted Border */}
          <div className="cyber-corner mx-auto flex w-full max-w-[380px] flex-col justify-between gap-3.5 border border-dotted border-line/90 bg-panel/30 p-5 sm:p-6 lg:col-span-4 lg:mx-0 transition-colors hover:border-line">
            <div className="flex items-center justify-between border-b border-dotted border-line/80 pb-2.5 font-mono text-[10px] text-neon">
             
              <span className="text-gray-500">03 QUESTIONS</span>
            </div>

            <div className="flex flex-col gap-3">
              {facts.map(([num, title, description], index) => (
                <FactCard
                  key={num}
                  num={num}
                  title={title}
                  description={description}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
