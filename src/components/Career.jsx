import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const experiences = [
  {
    level: "LEVEL 03",
    date: "DEC 2025 — MAR 2026",
    role: "Full Stack Developer Intern",
    company: "Amdox Technologies",
    description:
      "Worked on web applications using React, TypeScript and backend services.",
    tags: ["React", "TypeScript", "Docker", "AWS"],
  },
  {
    level: "LEVEL 02",
    date: "MAR 2026 — APR 2026",
    role: "Full Stack Developer Intern",
    company: "Zidio Development",
    description:
      "Contributed to client projects and scalable web solutions.",
    tags: ["React", "Node.js", "Docker", "AWS"],
  },
  {
    level: "LEVEL 01",
    date: "2024 — PRESENT",
    role: "Lead Webmaster",
    company: "CodeSphere Coding Club",
    description:
      "Contributing to the club website and helping organize Sprint-X Hackathon.",
    tags: ["React", "Node.js", "Tailwind CSS"],
  },
];

export default function Career() {
  const [expanded, setExpanded] = useState("");
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="career"
      ref={sectionRef}
      className="grid border-b border-line md:grid-cols-12"
    >
      {/* Section Header Column */}
      <div className="p-5 sm:p-7 md:col-span-3">
      

        <h2
          className={`text-4xl font-bold leading-none tracking-tight transition-all duration-700 delay-75 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          THE GRIND
          <br />
          SO FAR<span className="text-[#ff5c35]">.</span>
        </h2>

        <p
          className={`mt-5 font-mono text-xs leading-6 text-gray-400 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          A timeline of my journey, where I've learned, built and grown.
        </p>
      </div>

      {/* Timeline Entries Column */}
      <div className="relative px-5 pb-5 md:col-span-9 md:py-5">
        {/* Animated Vertical Timeline Line with Orange-to-Green Gradient */}
        <div
          className={`absolute bottom-8 left-[26px] top-8 w-px bg-gradient-to-b from-[#ff5c35] via-neon to-line origin-top transition-all duration-1000 ease-out md:left-[30px] ${
            isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
          }`}
        />

        {experiences.map((job, index) => {
          const isOrange = index % 2 === 0;

          return (
            <article
              key={job.level}
              style={{
                transitionDelay: `${200 + index * 120}ms`,
              }}
              className={`group relative grid gap-3 border-b border-line py-6 pl-7 last:border-0 sm:grid-cols-[90px_1fr] md:pl-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Glowing Timeline Marker Node */}
              <span
                className={`absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-ink ${
                  isOrange
                    ? "bg-[#ff5c35] ring-2 ring-[#ff5c35]/40 group-hover:ring-[#ff5c35]"
                    : "bg-neon ring-2 ring-neon/40 group-hover:ring-neon"
                } transition-transform duration-300 group-hover:scale-125 ${
                  isVisible ? "scale-100" : "scale-0"
                }`}
              />

              <div>
                <span
                  className={`inline-block border bg-panel px-2.5 py-1.5 font-mono text-[10px] transition-colors duration-200 ${
                    isOrange
                      ? "border-[#ff5c35]/60 text-[#ff5c35] group-hover:border-[#ff5c35]"
                      : "border-[#ffb035]/60 text-neon group-hover:border-neon"
                  }`}
                >
                  {job.level}
                </span>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-wide text-gray-500">
                  {job.date}
                </p>

                <h3 className="mt-1 text-lg font-bold text-gray-100 transition-colors duration-200 group-hover:text-white">
                  {job.role}
                </h3>

                <p className={`mt-1 text-sm font-semibold ${isOrange ? "text-[#ff5c35]" : "text-neon"}`}>
                  {job.company}
                </p>

                <p className="mt-2 font-mono text-[11px] leading-5 text-gray-400">
                  {job.description}
              </p>

              {/* Technology Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line bg-ink/60 px-2 py-1 font-mono text-[10px] text-gray-300 transition-colors duration-200 hover:border-neon hover:text-neon"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Expand / Collapse Button */}
              <button
                onClick={() =>
                  setExpanded(expanded === job.level ? "" : job.level)
                }
                className="neo-btn-outline mt-3.5 inline-flex items-center gap-2 border border-[#ffb035]/60 px-3 py-1.5 font-mono text-[10px] text-neon hover:bg-neon hover:text-ink"
                aria-expanded={expanded === job.level}
              >
                <span>{expanded === job.level ? "LESS" : "MORE"}</span>
                <ArrowUpRight
                  size={12}
                  className={`transition-transform duration-300 ${
                    expanded === job.level ? "rotate-90" : ""
                  }`}
                />
              </button>

              {/* Collapsible Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expanded === job.level
                    ? "mt-3 max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-l-2 border-neon bg-panel p-3 font-mono text-[11px] leading-5 text-gray-300 shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                  <span className="text-neon font-bold">&gt; FOCUS:</span>{" "}
                  Frontend implementation, API integration, collaboration, Git
                  workflows and practical development experience.
                </div>
              </div>
            </div>
          </article>
        );
      })}
      </div>
    </section>
  );
}
