import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  { id: "root", x: 600, y: 75, label: "FULL STACK", sub: "DEVELOPER", type: "root", desc: "Core architecture & complete modern web application development" },
  { id: "frontend", x: 280, y: 185, label: "FRONTEND", sub: "React • TS • JS", type: "branch", desc: "Interactive modern client-side user interfaces & state management" },
  { id: "backend", x: 600, y: 185, label: "BACKEND", sub: "Node • Express • APIs", type: "branch", desc: "RESTful architecture, microservices, auth & business logic" },
  { id: "database", x: 920, y: 185, label: "DATABASE", sub: "SQL • Redis • Mongo", type: "branch", desc: "Relational, document & high-performance in-memory caching" },
  
  // Tier 3: Core Technologies (HTML, React, TypeScript, Node.js, Redis, SQL, MongoDB)
  { id: "html", x: 120, y: 315, label: "HTML / CSS", sub: "Responsive UI", type: "leaf", desc: "Semantic markup, modern CSS layouts, accessibility & responsive design" },
  { id: "react", x: 280, y: 315, label: "REACT", sub: "Hooks • State", type: "leaf", desc: "Single Page Apps, reactive component state & performance optimization" },
  { id: "typescript", x: 440, y: 315, label: "TYPESCRIPT", sub: "Type Safety", type: "leaf", desc: "Static typing, robust interfaces & scalable developer tooling" },
  { id: "node", x: 600, y: 315, label: "NODE.JS", sub: "REST APIs", type: "leaf", desc: "Asynchronous event-driven runtime & backend API services" },
  { id: "redis", x: 760, y: 315, label: "REDIS", sub: "Caching • Memory", type: "leaf", desc: "High-throughput in-memory caching, sessions & performance acceleration" },
  { id: "sql", x: 920, y: 315, label: "SQL", sub: "MySQL • Postgres", type: "leaf", desc: "Relational database design, ACID compliance & complex SQL queries" },
  { id: "mongo", x: 1080, y: 315, label: "MONGODB", sub: "NoSQL • Mongoose", type: "leaf", desc: "Document collections, flexible schemas & database indexing" },
  
  // Tier 4: Infrastructure & Supporting Tooling
  { id: "git", x: 240, y: 455, label: "GIT / GITHUB", sub: "Version Control", type: "extra", desc: "Branching workflows, collaboration & CI/CD pipeline integration" },
  { id: "api", x: 440, y: 455, label: "EXPRESS", sub: "Middleware • Auth", type: "extra", desc: "Server routing, JWT authentication & secure API middleware" },
  { id: "docker", x: 640, y: 455, label: "DOCKER", sub: "Containers", type: "extra", desc: "Reproducible container environments & application isolation" },
  { id: "cloud", x: 840, y: 455, label: "DEPLOYMENT", sub: "Vercel • Render", type: "extra", desc: "Production hosting, continuous delivery, environment variables & monitoring" },
  { id: "ai", x: 1040, y: 455, label: "AI TOOLS", sub: "API Integration", type: "extra", desc: "LLM APIs, prompt engineering, agentic tools & developer productivity" },
];

const connections = [
  // Root to main branches
  ["root", "frontend"],
  ["root", "backend"],
  ["root", "database"],
  
  // Frontend branch
  ["frontend", "html"],
  ["frontend", "react"],
  ["frontend", "typescript"],
  
  // Backend branch
  ["backend", "typescript"],
  ["backend", "node"],
  ["backend", "redis"],
  
  // Database branch
  ["database", "redis"],
  ["database", "sql"],
  ["database", "mongo"],
  
  // Supporting connections & tooling
  ["html", "git"],
  ["react", "git"],
  ["typescript", "git"],
  ["node", "api"],
  ["node", "docker"],
  ["redis", "docker"],
  ["sql", "cloud"],
  ["mongo", "ai"],
  ["api", "docker"],
  ["docker", "cloud"],
  ["cloud", "ai"],
];

const getNode = (id) => skills.find((skill) => skill.id === id);

function Hexagon({ x, y, width = 142, height = 64, isHighlighted = false }) {
  const points = [
    `${x - width / 2 + 14},${y - height / 2}`,
    `${x + width / 2 - 14},${y - height / 2}`,
    `${x + width / 2},${y}`,
    `${x + width / 2 - 14},${y + height / 2}`,
    `${x - width / 2 + 14},${y + height / 2}`,
    `${x - width / 2},${y}`,
  ].join(" ");

  return (
    <polygon
      points={points}
      className={`skill-hex ${isHighlighted ? "skill-hex-highlight" : ""}`}
    />
  );
}

export default function SkillTree() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [hoveredNodeId, setHoveredNodeId] = useState(null);

  // Compute connected nodes for highlighting
  const connectedNodeIds = new Set();
  if (hoveredNodeId) {
    connectedNodeIds.add(hoveredNodeId);
    connections.forEach(([from, to]) => {
      if (from === hoveredNodeId) connectedNodeIds.add(to);
      if (to === hoveredNodeId) connectedNodeIds.add(from);
    });
  }

  const activeSkill = skills.find((s) => s.id === (hoveredNodeId || "root"));

  return (
    <section
      id="skill-tree"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-line bg-transparent px-4 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
           
            <h2
              className={`text-4xl font-bold tracking-tight sm:text-6xl transition-all duration-700 delay-75 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              SKILL TREE<span className="text-[#ff5c35]">.</span>
            </h2>
            <p
              className={`mt-3 max-w-lg text-sm leading-6 text-gray-400 transition-all duration-700 delay-150 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The technologies I use to turn ideas into working products.
              Follow the branches from frontend and backend to databases and DevOps.
            </p>
          </div>

          <div
            className={`flex items-center gap-2 border border-dotted border-[#ff5c35]/50 bg-panel/30 backdrop-blur-md px-3 py-2 font-mono text-[10px] text-neon transition-all duration-500 delay-225 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5c35] animate-pulse" />
            <span>16 NODES / 03 DOMAINS</span>
          </div>
        </div>

        {/* Desktop Skill Tree Container */}
        <div
          className={`hidden overflow-hidden border border-dotted border-line/80 bg-panel/20 backdrop-blur-sm transition-all duration-700 delay-300 md:block ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          }`}
        >
          {/* Tree Terminal Status Bar */}
          <div className="flex items-center justify-between border-b border-dotted border-line/80 bg-panel/30 px-5 py-3 font-mono text-[10px] text-gray-400">
            <div className="flex items-center gap-3">
              <span>SKILLS_NETWORK.map</span>
              {hoveredNodeId && (
                <span className="text-[#ff5c35] font-semibold">
                  [INSPECTING: {activeSkill?.label}]
                </span>
              )}
            </div>
          </div>

          <svg
            viewBox="0 0 1200 580"
            role="img"
            aria-label="Connected skill tree showing frontend, backend, databases, redis, sql, typescript, version control, Docker and deployment"
            className="h-auto w-full select-none"
          >
            <defs>
              <pattern
                id="skill-grid"
                width="25"
                height="25"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 25 0 L 0 0 0 25"
                  fill="none"
                  stroke="#382019"
                  strokeWidth=".6"
                />
              </pattern>
              <radialGradient id="skill-glow">
                <stop offset="0%" stopColor="#ffb035" stopOpacity=".15" />
                <stop offset="60%" stopColor="#ff5c35" stopOpacity=".04" />
                <stop offset="100%" stopColor="#ffb035" stopOpacity="0" />
              </radialGradient>
              <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid & Background Glow */}
            <rect width="1200" height="580" fill="url(#skill-grid)" />
            <circle cx="600" cy="270" r="350" fill="url(#skill-glow)" />

            {/* Connecting Lines */}
            {connections.map(([from, to]) => {
              const a = getNode(from);
              const b = getNode(to);
              if (!a || !b) return null;

              const isDirectlyConnected =
                hoveredNodeId && (from === hoveredNodeId || to === hoveredNodeId);
              const isDimmed =
                hoveredNodeId && !isDirectlyConnected;

              return (
                <line
                  key={`${from}-${to}`}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  className={`transition-all duration-300 ${
                    isDirectlyConnected
                      ? "stroke-neon stroke-[2.5] stroke-opacity-100"
                      : isDimmed
                      ? "stroke-line stroke-[1] stroke-opacity-25"
                      : "skill-link animate-dash-flow"
                  }`}
                  style={{
                    filter: isDirectlyConnected ? "url(#neon-glow)" : "none",
                  }}
                />
              );
            })}

            {/* Hexagonal Nodes */}
            {skills.map((skill) => {
              const isHovered = hoveredNodeId === skill.id;
              const isConnected = connectedNodeIds.has(skill.id);
              const isDimmed = hoveredNodeId && !isConnected;

              return (
                <g
                  key={skill.id}
                  className="skill-node transition-all duration-300 cursor-pointer"
                  tabIndex="0"
                  role="button"
                  aria-label={`${skill.label}: ${skill.sub} - ${skill.desc}`}
                  onMouseEnter={() => setHoveredNodeId(skill.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onFocus={() => setHoveredNodeId(skill.id)}
                  onBlur={() => setHoveredNodeId(null)}
                  style={{
                    opacity: isDimmed ? 0.35 : 1,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                >
                  {/* Subtle Halo / Pulse */}
                  <circle
                    cx={skill.x}
                    cy={skill.y}
                    r={skill.type === "root" ? 64 : 52}
                    className={`skill-halo transition-opacity duration-300 ${
                      isHovered ? "opacity-25" : "opacity-0"
                    }`}
                  />

                  {/* Hexagon Body */}
                  <Hexagon
                    x={skill.x}
                    y={skill.y}
                    width={skill.type === "root" ? 172 : 142}
                    height={skill.type === "root" ? 74 : 64}
                    isHighlighted={isHovered || isConnected}
                  />

                  {/* Node Title */}
                  <text
                    x={skill.x}
                    y={skill.y - 4}
                    textAnchor="middle"
                    className={`skill-title transition-colors duration-200 ${
                      isHovered ? "fill-neon font-bold" : "fill-[#f4f5f0]"
                    }`}
                  >
                    {skill.label}
                  </text>

                  {/* Node Subtitle */}
                  <text
                    x={skill.x}
                    y={skill.y + 13}
                    textAnchor="middle"
                    className="skill-subtitle"
                  >
                    {skill.sub}
                  </text>
                </g>
              );
            })}

            {/* Footer Technical Annotations */}
            <text x="30" y="555" className="skill-footer">
              FIG 01 — INTERACTIVE TECHNOLOGY MAP [HOVER NODES TO TRACE CONNECTIONS]
            </text>
            <text x="1170" y="555" textAnchor="end" className="skill-footer">
              STATUS: CONTINUOUSLY LEARNING & EXPANDING
            </text>
          </svg>

          {/* Active Node Inspector / HUD Bar */}
          <div className="border-t border-dotted border-line/80 bg-panel/30 backdrop-blur-md px-5 py-3 font-mono text-[11px] text-gray-300 transition-colors duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-neon font-bold">&gt; {activeSkill?.label}:</span>{" "}
                <span className="text-gray-300">{activeSkill?.desc}</span>
              </div>
              <div className="text-[10px] text-gray-400">
                TOOLS: <span className="text-neon">{activeSkill?.sub}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Skill Tree */}
        <div
          className={`border border-dotted border-line/80 bg-panel/20 backdrop-blur-sm p-4 md:hidden transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-5 flex items-center justify-between border-b border-dotted border-line/80 pb-3 font-mono text-[10px] text-neon">
            <span>● SKILLS_NETWORK / MOBILE VIEW</span>
            <span className="text-gray-400">16 NODES</span>
          </div>

          <div className="flex flex-col items-center">
            {/* Root Card */}
            <div className="skill-mobile-card skill-mobile-root shadow-[0_0_12px_rgba(255,176,53,0.2)]">
              <span>ROOT / 01</span>
              <strong>FULL STACK</strong>
              <small>DEVELOPER</small>
            </div>

            <div className="h-7 w-px border-l border-dashed border-neon/60" />

            {/* Mobile Skill Branches */}
            {[
              {
                title: "01 / FRONTEND",
                skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
              },
              {
                title: "02 / BACKEND",
                skills: ["Node.js", "Express", "REST APIs", "Redis"],
              },
              {
                title: "03 / DATABASE",
                skills: ["SQL / MySQL", "PostgreSQL", "Redis", "MongoDB", "Mongoose"],
              },
              {
                title: "04 / DEVOPS & TOOLS",
                skills: ["Git", "GitHub", "Docker", "Deployment", "CI/CD"],
              },
              {
                title: "05 / EXPLORING & AI",
                skills: ["AI APIs", "System Design", "New Technologies"],
              },
            ].map((branch) => (
              <div key={branch.title} className="w-full">
                <div className="mb-2 flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-neon animate-status-beacon" />
                  <span className="font-mono text-xs font-semibold text-neon">
                    {branch.title}
                  </span>
                </div>

                <div className="ml-1 border-l border-dashed border-line pb-5 pl-4">
                  <div className="flex flex-wrap gap-2">
                    {branch.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-line/70 bg-panel/30 px-3 py-2 font-mono text-[11px] text-gray-200 transition-all duration-200 hover:border-neon hover:text-neon active:border-neon"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 font-mono text-[10px] leading-5 text-gray-500">
          NOTE: This map represents my learning areas and tools. The branches
          continue to grow as I build and ship more scalable projects.
        </p>
      </div>

      <style>{`
        .skill-link {
          stroke: #ffb035;
          stroke-opacity: .4;
          stroke-width: 1.5;
          stroke-dasharray: 4 6;
          transition: stroke .3s, stroke-opacity .3s, stroke-width .3s;
        }

        .skill-hex {
          fill: rgba(13, 9, 8, 0.45);
          stroke: #ffb035;
          stroke-opacity: .75;
          stroke-width: 1.5;
          transition: fill .25s ease, stroke .25s ease, stroke-width .25s ease, stroke-opacity .25s ease;
        }

        .skill-hex-highlight {
          fill: rgba(36, 21, 14, 0.7) !important;
          stroke: #ffb035 !important;
          stroke-width: 2.2 !important;
          stroke-opacity: 1 !important;
          filter: drop-shadow(0 0 8px rgba(255, 176, 53, 0.45));
        }

        .skill-halo {
          fill: #ffb035;
          transition: opacity .3s ease;
        }

        .skill-node {
          cursor: pointer;
          outline: none;
        }

        .skill-node:hover .skill-hex,
        .skill-node:focus .skill-hex {
          fill: rgba(36, 21, 14, 0.75);
          stroke: #ff5c35;
          stroke-width: 2.5;
          stroke-opacity: 1;
        }

        .skill-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .6px;
        }

        .skill-subtitle {
          fill: #ffb035;
          font-family: "DM Mono", monospace;
          font-size: 8.5px;
        }

        .skill-footer {
          fill: #a88878;
          font-family: "DM Mono", monospace;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .skill-mobile-card {
          display: flex;
          width: 100%;
          max-width: 260px;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          border: 1px solid #ffb035;
          background: rgba(13, 9, 8, 0.45);
          padding: 15px 10px;
          text-align: center;
        }

        .skill-mobile-card span,
        .skill-mobile-card small {
          font-family: "DM Mono", monospace;
          font-size: 10px;
          color: #ffb035;
        }

        .skill-mobile-card strong {
          font-size: 17px;
          letter-spacing: 1px;
        }

        .skill-mobile-root {
          background: rgba(36, 21, 14, 0.65);
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-hex,
          .skill-halo,
          .skill-link {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
