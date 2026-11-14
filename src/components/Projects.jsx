
import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const allProjects = [
  {
    number: "01",
    name: "TEESX",
    category: "ECOMMERCE",
    description:
      "Engineered a complete e-commerce platform with secure authentication, product management, cart and order workflows. Integrated Razorpay payment gateway to streamline checkout and online transaction processing.",
    tech: ["MERN Stack", "JWT", "Razorpay", "Tailwind CSS"],
    live: "",
    code: "https://github.com/samirkhan41/StartUp-copy-2",
  },
  {
    number: "02",
    name: "FOOD DELIVERY APP",
    category: "FOOD DELIVERY",
    description:
      "Built an end-to-end food ordering system with restaurant discovery, cart management and order processing. Implemented real-time order status synchronization and delivery tracking using WebSockets.",
    tech: ["MERN Stack", "JWT", "WebSockets", "REST APIs"],
    live: "",
    code: "https://github.com/samirkhan41/FoodFlow-",
  },
  {
    number: "03",
    name: "LINKEDIN CLONE",
    category: "SOCIAL NETWORKING",
    description:
      "Developed a professional networking platform with dynamic user profiles and content publishing. Implemented interactive social features for post creation and user engagement.",
    tech: ["MERN Stack", "JWT", "REST APIs", "Cloudinary"],
    live: "",
    code: "https://github.com/samirkhan41/Linkedin-Clone",
  },
  {
    number: "04",
    name: "INSTAGRAM CLONE",
    category: "SOCIAL MEDIA",
    description:
      "Built an image-sharing platform with user profiles, media uploads and dynamic post management. Integrated Cloudinary for cloud-based image storage and implemented likes and comments.",
    tech: ["MERN Stack", "JWT", "Cloudinary", "REST APIs"],
    live: "",
    code: "https://github.com/samirkhan41/InstaConnect/",
  },
  {
    number: "05",
    name: "AI HEALTHCARE ROBOT",
    category: "IOT / HEALTHCARE",
    description:
      "Designed an IoT-based telepresence robot with mecanum-wheel mobility for remote movement and assisted patient interaction. Integrated ultrasonic obstacle detection, MAX30102 sensor monitoring and real-time device communication.",
    tech: ["ESP32", "Embedded C/C++", "Python", "FastAPI", "SQLite", "WebSockets"],
    live: "",
    code: "https://github.com/samirkhan41/MediBot",
  },
  {
    number: "06",
    name: "DevForge",
    category: "AI IDE ",
    description:
      "DevForge — An AI-powered coding platform that generates code, builds projects, fixes bugs, and automates development workflows",
    tech: ["React", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    live: "",
    code: "https://github.com/samirkhan41/DevForge",
  },
];

export default function Projects() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? allProjects
    : allProjects.slice(0, 3);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="border-b border-line px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2
              className={`text-3xl font-bold tracking-tight sm:text-5xl transition-all duration-700 delay-75 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              PROJECTS<span className="text-[#ff5c35]">.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-gray-400">
              SHOWING{" "}
              <span className="font-bold text-neon">
                {displayedProjects.length}
              </span>{" "}
              / {allProjects.length}
            </span>

            <a
              href="https://github.com/samirkhan41"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Samir Khan's GitHub repositories (opens in new tab)"
              className={`group flex items-center gap-1 font-mono text-xs text-gray-300 transition-all duration-500 delay-150 hover:text-[#ff5c35] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span>GITHUB</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Compact Square Projects Grid */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {displayedProjects.map((project, index) => {
            const isOrange = index % 2 === 0;

            return (
              <article
                key={project.number}
                style={{
                  transitionDelay: `${(index % 3) * 75 + 100}ms`,
                }}
                className={`group cyber-corner flex aspect-square flex-col justify-between border border-line bg-panel transition-all duration-300 ${
                  isOrange
                    ? "hover:border-[#ff5c35] hover:shadow-[0_8px_24px_rgba(255,92,53,0.18)]"
                    : "hover:border-neon hover:shadow-[0_8px_24px_rgba(255,176,53,0.2)]"
                } hover:-translate-y-1.5 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                {/* Card Header Bar */}
                <div className="flex items-center justify-between border-b border-line bg-ink/70 px-4 py-2 font-mono text-[10px]">
                  <span
                    className={`font-semibold tracking-wider ${
                      isOrange ? "text-[#ff5c35]" : "text-neon"
                    }`}
                  >
                    {project.number} // {project.category}
                  </span>

                  <ArrowUpRight
                    size={13}
                    className={`text-gray-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isOrange
                        ? "group-hover:text-[#ff5c35]"
                        : "group-hover:text-neon"
                    }`}
                  />
                </div>

                {/* Card Middle Content */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <h3
                      className={`text-base font-bold tracking-tight text-white transition-colors duration-200 ${
                        isOrange
                          ? "group-hover:text-[#ff5c35]"
                          : "group-hover:text-neon"
                      } sm:text-lg`}
                    >
                      {project.name}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-gray-400 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Badges */}
                  <div className="my-2 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((technology) => (
                      <span
                        key={technology}
                        className="border border-line/80 bg-ink/90 px-2 py-0.5 font-mono text-[9px] text-gray-300 transition-colors duration-200 group-hover:border-[#ff5c35]/40 group-hover:text-white"
                      >
                        {technology}
                      </span>
                    ))}

                    {project.tech.length > 4 && (
                      <span className="border border-line/60 bg-ink/50 px-1.5 py-0.5 font-mono text-[9px] text-gray-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Action Links */}
                  <div className="flex items-center justify-between border-t border-line/70 pt-2.5 font-mono text-[10px]">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
                      className="flex items-center gap-1 text-gray-400 transition-colors duration-200 hover:text-neon"
                    >
                      <span>CODE</span>
                      <ArrowUpRight size={11} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.name} live demo application (opens in new tab)`}
                        className="flex items-center gap-1 font-semibold text-neon transition-colors duration-200 hover:text-[#ffd166]"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View More Projects Action Controls */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="neo-btn-outline group flex items-center gap-2 border border-neon bg-panel px-6 py-3 font-mono text-xs font-bold text-neon hover:bg-neon hover:text-ink shadow-[0_4px_16px_rgba(255,176,53,0.2)] transition-all duration-200"
          >
            <span>
              {showAll ? "SHOW LESS" : "VIEW MORE PROJECTS (+3)"}
            </span>

            {showAll ? (
              <ChevronUp
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            ) : (
              <ChevronDown
                size={14}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            )}
          </button>

          {showAll && (
            <a
              href="https://github.com/samirkhan41?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View all repositories on Samir Khan's GitHub profile (opens in new tab)"
              className="neo-btn-outline group flex items-center gap-2 border border-line bg-ink px-5 py-3 font-mono text-xs font-semibold text-gray-300 hover:border-neon hover:text-neon transition-all duration-200"
            >
              <span>GITHUB REPOSITORIES</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
