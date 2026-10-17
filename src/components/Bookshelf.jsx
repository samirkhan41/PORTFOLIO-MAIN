import { useState } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const codingBooks = [
  {
    id: "clean-code",
    title: "Clean Code",
    subtitle: "A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    category: "CODE QUALITY",
    edition: "CLASSIC EDITION",
    badge: "CRAFTSMANSHIP",
    coverGradient: "from-[#0f1f2e] via-[#09131d] to-[#04080c]",
    accentColor: "#38bdf8",
    note: "Focuses on writing readable, testable, and maintainable software. Teaches how to write code that humans can understand, eliminate code smells, and embrace ruthless refactoring.",
    keyTakeaway: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    topics: ["Meaningful Naming", "Single Responsibility", "TDD & Unit Testing", "Refactoring Smells"],
  },
  {
    id: "pragmatic-programmer",
    title: "The Pragmatic Programmer",
    subtitle: "Your Journey To Mastery",
    author: "David Thomas & Andrew Hunt",
    category: "ENGINEERING MINDSET",
    edition: "20TH ANNIVERSARY",
    badge: "PHILOSOPHY",
    coverGradient: "from-[#291e0a] via-[#1a1205] to-[#0c0802]",
    accentColor: "#ffb035",
    note: "Essential practical philosophies for modern engineers. Emphasizes taking responsibility, continuous learning, avoiding broken windows, and building adaptable, orthogonal codebases.",
    keyTakeaway: "Don't live with broken windows. Fix bad designs, wrong decisions, and poor code when you see them.",
    topics: ["Continuous Learning", "Orthogonality & DRY", "Design by Contract", "Tool Mastery"],
  },
  {
    id: "ddia",
    title: "Designing Data-Intensive Apps",
    subtitle: "Reliable, Scalable & Maintainable Systems",
    author: "Martin Kleppmann",
    category: "DISTRIBUTED SYSTEMS",
    edition: "OREILLY REFERENCE",
    badge: "ARCHITECTURE",
    coverGradient: "from-[#290d16] via-[#17070c] to-[#080204]",
    accentColor: "#f43f5e",
    note: "The definitive guide to distributed data infrastructure. Covers how databases store and index data, replication lags, partition tolerance, and consensus algorithms.",
    keyTakeaway: "Reliability is continuing to work correctly even when things go wrong.",
    topics: ["Storage Engines (LSM/B-Tree)", "Replication & Consensus", "Partitioning Strategies", "Transactions & ACID"],
  },
  {
    id: "system-design",
    title: "System Design Interview",
    subtitle: "An Insider's Guide to Scalable Architectures",
    author: "Alex Xu",
    category: "SYSTEM DESIGN",
    edition: "VOLUME 01",
    badge: "SCALE & CLOUD",
    coverGradient: "from-[#1a1738] via-[#0f0d22] to-[#06050e]",
    accentColor: "#a78bfa",
    note: "Practical blueprints for architecting high-scale internet services. Covers rate limiters, caching layers, consistent hashing, message brokers, and horizontal scale.",
    keyTakeaway: "System design is about tradeoffs: latency, availability, consistency, and cost.",
    topics: ["High-Scale Architecture", "Rate Limiters & Caching", "Consistent Hashing", "Message Queues & Decoupling"],
  },
];

export default function Bookshelf() {
  const [selected, setSelected] = useState(codingBooks[0]);
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="books"
      ref={sectionRef}
      className="grid border-b border-line md:grid-cols-12"
    >
      {/* Header Column */}
      <div className="flex flex-col justify-between p-5 sm:p-7 md:col-span-3">
        <div>
         

          <h2
            className={`text-4xl font-bold leading-none tracking-tight transition-all duration-700 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            ENGINEERING
            <br />
            SHELF<span className="text-[#ff5c35]">.</span>
          </h2>

          <p
            className={`mt-5 font-mono text-xs leading-6 text-gray-400 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Core books on coding craftsmanship, scalable architecture, and distributed engineering that shaped my technical perspective.
          </p>
        </div>

        <div
          className={`mt-6 border-t border-line pt-4 font-mono text-[10px] text-gray-500 transition-all duration-700 delay-225 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>SELECT A BOOK TO INSPECT KEY TAKEAWAYS</span>
        </div>
      </div>

      {/* 3D Realistic Books Grid Column */}
      <div className="grid grid-cols-2 gap-6 p-5 sm:grid-cols-4 md:col-span-6 md:p-6 lg:gap-5 items-center justify-items-center">
        {codingBooks.map((book, index) => {
          const isSelected = selected.id === book.id;

          return (
            <button
              key={book.id}
              onClick={() => setSelected(book)}
              style={{
                transitionDelay: `${150 + index * 80}ms`,
              }}
              className={`group relative flex w-full max-w-[150px] flex-col items-center text-left focus:outline-none transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {/* Realistic 3D Hardcover Book Body */}
              <div
                className={`relative flex h-[220px] w-full flex-col justify-between overflow-hidden rounded-r-md border bg-gradient-to-b p-3 transition-all duration-300 ease-out select-none ${
                  book.coverGradient
                } ${
                  isSelected
                    ? "border-neon shadow-[0_12px_28px_rgba(255,176,53,0.25),4px_0_0_#382019,7px_0_0_#22130e] -translate-y-2.5 scale-[1.03]"
                    : "border-line shadow-[3px_0_0_#382019,6px_0_0_#22130e,0_8px_16px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 group-hover:border-neon/70 group-hover:shadow-[0_10px_22px_rgba(255,176,53,0.18),4px_0_0_#382019]"
                }`}
              >
                {/* Book Spine Crease & Texture on Left */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-3.5 bg-gradient-to-r from-black/80 via-white/10 to-transparent border-r border-white/5" />
                <div className="pointer-events-none absolute left-3.5 top-0 bottom-0 w-[1px] bg-black/60 shadow-[1px_0_0_rgba(255,255,255,0.06)]" />

                {/* Cover Subtle Sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/5" />

                {/* Top Book Header */}
                <div className="relative z-10 pl-2">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[8px] font-bold tracking-wider"
                      style={{ color: book.accentColor }}
                    >
                      {book.badge}
                    </span>
                    <BookOpen size={13} className="text-gray-400 opacity-70" />
                  </div>
                  <span className="mt-1 block font-mono text-[7px] tracking-widest text-gray-500 uppercase">
                    {book.edition}
                  </span>
                </div>

                {/* Center Book Title */}
                <div className="relative z-10 my-auto pl-2 pt-2">
                  <div
                    className="h-1 w-6 mb-2 rounded-full"
                    style={{ backgroundColor: book.accentColor }}
                  />
                  <h3 className="text-sm font-bold leading-tight tracking-tight text-white drop-shadow-sm">
                    {book.title}
                  </h3>
                  <p className="mt-1 font-mono text-[8px] leading-3 text-gray-400 line-clamp-2">
                    {book.subtitle}
                  </p>
                </div>

                {/* Bottom Author & Publisher Strip */}
                <div className="relative z-10 border-t border-white/10 pt-2 pl-2">
                  <span className="block truncate font-mono text-[8px] font-semibold text-gray-300">
                    {book.author}
                  </span>
                  <div className="mt-1 flex items-center justify-between font-mono text-[7px] text-gray-500">
                    <span>{book.category}</span>
                    {isSelected && (
                      <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Bookmark ribbon hanging if selected */}
                {isSelected && (
                  <div className="absolute top-0 right-3 h-5 w-2 bg-neon shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
                )}
              </div>

              {/* Shelf Base / Book Shadow */}
              <div className="mt-2.5 h-1 w-4/5 rounded-full bg-black/80 blur-[2px] transition-all duration-300 group-hover:w-full group-hover:blur-[3px]" />

              {/* Book Title Label Below */}
              <span
                className={`mt-1 block text-center font-mono text-[10px] tracking-wide transition-colors duration-200 ${
                  isSelected ? "font-bold text-neon" : "text-gray-400 group-hover:text-neon"
                }`}
              >
                {book.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Book Aside Detail Panel */}
      <aside
        className={`m-5 cyber-corner flex flex-col justify-between border border-line bg-panel p-5 transition-all duration-700 delay-300 md:col-span-3 md:ml-0 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          {/* Status Header */}
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="font-mono text-[10px] font-semibold text-neon tracking-wider">
              // INSPECTING VOLUME
            </span>
            
          </div>

          {/* Book Metadata */}
          <div className="mt-4 transition-all duration-300">
            <span
              className="inline-block rounded-xs border px-1.5 py-0.5 font-mono text-[8px] font-bold tracking-wider"
              style={{
                borderColor: `${selected.accentColor}60`,
                color: selected.accentColor,
                backgroundColor: `${selected.accentColor}10`,
              }}
            >
              {selected.category}
            </span>

            <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {selected.title}
            </h3>

            <p className="mt-0.5 font-mono text-xs text-gray-400">
              BY {selected.author.toUpperCase()}
            </p>

            <p className="mt-3 font-mono text-[11px] leading-5 text-gray-300">
              {selected.note}
            </p>

            {/* Core Concepts */}
            <div className="mt-4">
              <p className="font-mono text-[9px] tracking-wider text-neon uppercase mb-2">
                &gt; CORE CONCEPTS COVERED:
              </p>
              <div className="space-y-1.5">
                {selected.topics.map((topic) => (
                  <div
                    key={topic}
                    className="flex items-center gap-2 font-mono text-[10px] text-gray-300"
                  >
                    <CheckCircle2 size={11} className="text-neon shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Takeaway Quote */}
        <div className="mt-6 border-l-2 border-neon bg-ink/70 p-3 shadow-inner">
          <span className="text-neon select-none font-serif text-lg leading-none">“</span>
          <p className="mt-1 font-mono text-[10px] italic leading-relaxed text-gray-300">
            {selected.keyTakeaway}
          </p>
        </div>
      </aside>
    </section>
  );
}
