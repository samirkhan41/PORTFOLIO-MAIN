import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contacts = [
  {
    label: "EMAIL",
    text: "samirkha4575@gmail.com",
    href: "mailto:samirkha4575@gmail.com",
    symbol: "@",
  },
  {
    label: "LINKEDIN",
    text: "Connect professionally",
    href: "https://www.linkedin.com/in/samir-khan-649158358/",
    symbol: "in",
  },
  {
    label: "GITHUB",
    text: "Explore my code",
    href: "https://github.com/samirkhan41",
    symbol: "</>",
  },
  {
    label: "INSTAGRAM",
    text: "Find me online",
    href: "https://www.instagram.com/sftsamir19",
    symbol: "◎",
  },
];

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="grid items-stretch border-b border-line md:grid-cols-12"
    >
      {/* Contact Introduction Column */}
      <div className="flex flex-col justify-center border-b border-line p-5 sm:p-8 md:col-span-4 md:border-b-0 md:border-r">
      

        <h2
          className={`text-4xl font-bold leading-none tracking-tight sm:text-5xl transition-all duration-700 delay-75 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          LET'S
          <br />
          CONNECT<span className="text-[#ff5c35]">.</span>
        </h2>

        <p
          className={`mt-6 font-mono text-xs leading-6 text-gray-400 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Have a project in mind? I'm open to new opportunities, collaborations, and
          interesting conversations. Feel free to reach out across any of these channels.
        </p>

        {/* Quick Link to Hire Page */}
        <div className="mt-8 border border-dotted border-[#ff5c35]/70 bg-[#0d0908] p-4 transition-all duration-300 hover:border-neon">
          <p className="font-mono text-xs font-semibold text-[#ff5c35]">
            Looking to hire for a Job, Freelance or Sponsor?
          </p>
          <a
            href="#hire"
            className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-xs font-bold text-neon hover:text-[#ffd166] transition-colors"
          >
            <span>CONFIGURE INQUIRY ON HIRE PAGE</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      {/* Contact Interactive Cards Grid */}
      <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-8 md:col-span-8">
        {contacts.map(({ label, text, href, symbol }, index) => {
          const isOrange = index % 2 === 0;

          return (
            <a
              key={label}
              href={href}
              target={label === "EMAIL" ? undefined : "_blank"}
              rel={label === "EMAIL" ? undefined : "noopener noreferrer"}
              aria-label={`Contact Samir Khan via ${label} (${text})`}
              style={{
                transitionDelay: `${150 + index * 75}ms`,
              }}
              className={`group cyber-corner flex min-w-0 items-center gap-4 border border-line bg-panel p-5 transition-all duration-300 ${
                isOrange
                  ? "hover:border-[#ff5c35] hover:shadow-[0_6px_20px_rgba(255,92,53,0.14)]"
                  : "hover:border-neon hover:shadow-[0_6px_20px_rgba(255,176,53,0.18)]"
              } hover:-translate-y-1 focus:border-neon focus:outline-none ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {/* Symbol Badge */}
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-ink font-mono text-base font-bold transition-all duration-300 ${
                isOrange
                  ? "text-[#ff5c35] group-hover:border-[#ff5c35]"
                  : "text-neon group-hover:border-neon"
              } group-hover:scale-105`}>
                {symbol}
              </span>

              <span className="min-w-0 flex-1">
                <span className={`block font-mono text-xs tracking-wider ${isOrange ? "text-[#ff5c35]" : "text-neon"}`}>
                  {label}
                </span>

                <span className="mt-1 block text-sm font-semibold text-gray-200 transition-colors duration-200 group-hover:text-white">
                  {text}
                </span>
              </span>

              <ArrowUpRight
                size={18}
                className={`shrink-0 text-gray-500 transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                  isOrange ? "group-hover:text-[#ff5c35]" : "group-hover:text-neon"
                }`}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}
