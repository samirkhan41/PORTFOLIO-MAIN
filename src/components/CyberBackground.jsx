import { useState, useEffect } from "react";

export default function CyberBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY || 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e) => {
      // Subtle parallax offset: normalized from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Parallax offsets (smooth, constrained to prevent disorientation)
  const skyOffsetY = scrollY * 0.03 + mousePos.y * 3;
  const skyOffsetX = mousePos.x * 4;

  const moonOffsetY = scrollY * 0.05 + mousePos.y * 5;
  const moonOffsetX = mousePos.x * 6;

  const cityOffsetY = scrollY * 0.08 + mousePos.y * 4;
  const cityOffsetX = mousePos.x * 3;

  const foregroundOffsetY = scrollY * 0.12 + mousePos.y * 2;

  // Staggered blinking window coordinates (proportional % values matching image skyline)
  const blinkingWindows = [
    { left: "7.8%", top: "32%", delay: "0.2s", color: "#ffb347" },
    { left: "8.6%", top: "41%", delay: "2.1s", color: "#ff5c35" },
    { left: "14.8%", top: "43%", delay: "1.4s", color: "#ffd166" },
    { left: "15.4%", top: "52%", delay: "3.6s", color: "#ff5c35" },
    { left: "19.5%", top: "27%", delay: "0.8s", color: "#ffb347" },
    { left: "20.2%", top: "35%", delay: "2.9s", color: "#ffd166" },
    { left: "26.3%", top: "34%", delay: "1.7s", color: "#ff5c35" },
    { left: "41.6%", top: "36%", delay: "0.5s", color: "#ffb347" },
    { left: "42.3%", top: "44%", delay: "2.4s", color: "#ffd166" },
    { left: "73.2%", top: "26%", delay: "1.1s", color: "#ffb347" },
    { left: "75.1%", top: "30%", delay: "3.2s", color: "#ffd166" },
    { left: "73.4%", top: "39%", delay: "0.9s", color: "#ff5c35" },
    { left: "80.8%", top: "38%", delay: "2.7s", color: "#ffb347" },
    { left: "81.4%", top: "47%", delay: "1.3s", color: "#ffd166" },
    { left: "86.5%", top: "43%", delay: "3.8s", color: "#ff5c35" },
    { left: "90.7%", top: "41%", delay: "0.6s", color: "#ffb347" },
  ];

  // Radio Antenna Tower Warning Beacon Beams
  const antennaBeacons = [
    { left: "47.8%", top: "9.2%", delay: "0s" },
    { left: "66.4%", top: "11.6%", delay: "0.75s" },
  ];

  // Server Rack LEDs (center bottom computer cluster)
  const serverLeds = [
    { left: "49.6%", top: "58.2%", color: "#ffb035", delay: "0.3s" },
    { left: "51.4%", top: "58.2%", color: "#ff5c35", delay: "0.8s" },
    { left: "53.2%", top: "58.2%", color: "#ffd166", delay: "1.4s" },
    { left: "49.6%", top: "62.4%", color: "#ff5c35", delay: "0.5s" },
    { left: "51.4%", top: "62.4%", color: "#ffb035", delay: "1.1s" },
    { left: "53.2%", top: "62.4%", color: "#ffd166", delay: "1.9s" },
    { left: "49.6%", top: "66.6%", color: "#ffd166", delay: "0.7s" },
    { left: "51.4%", top: "66.6%", color: "#ff5c35", delay: "1.3s" },
    { left: "53.2%", top: "66.6%", color: "#ffb035", delay: "0.2s" },
  ];

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#070504]"
      aria-hidden="true"
    >
      {/* ====================================================================
          LAYER 1: Night Sky Ambient Radial Glow & Moving Pixel Stars
          ==================================================================== */}
      <div
        className="absolute inset-0 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${skyOffsetX}px, ${-skyOffsetY}px, 0)`,
        }}
      >
        {/* Warm Burning Sunset / Cyber Atmospheric Horizon Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,92,53,0.22)_0%,rgba(255,176,53,0.06)_45%,rgba(7,5,4,0.94)_85%)]" />

        {/* Drifting Stars / Plus Icons */}
        <div className="absolute top-[8%] left-[12%] text-[#ff5c35]/40 text-xs animate-pulse font-mono select-none">
          +
        </div>
        <div className="absolute top-[14%] left-[28%] text-neon/40 text-[10px] animate-pulse font-mono select-none" style={{ animationDelay: "1s" }}>
          ✦
        </div>
        <div className="absolute top-[7%] left-[41%] text-[#ff5c35]/45 text-sm animate-pulse font-mono select-none" style={{ animationDelay: "2s" }}>
          +
        </div>
        <div className="absolute top-[15%] left-[56%] text-amber-300/35 text-[9px] animate-pulse font-mono select-none" style={{ animationDelay: "1.5s" }}>
          •
        </div>
        <div className="absolute top-[7.5%] left-[61%] text-[#ff5c35]/40 text-xs animate-pulse font-mono select-none" style={{ animationDelay: "0.7s" }}>
          +
        </div>
        <div className="absolute top-[16%] left-[88%] text-[#ff5c35]/45 text-sm animate-pulse font-mono select-none" style={{ animationDelay: "2.5s" }}>
          +
        </div>
        <div className="absolute top-[9%] left-[94%] text-neon/35 text-[10px] animate-pulse font-mono select-none" style={{ animationDelay: "1.8s" }}>
          ✦
        </div>

        {/* Slow Drifting Pixel Clouds */}
        <div
          className="absolute top-[12%] left-0 w-[200%] h-12 opacity-25 animate-cloud-drift select-none"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, rgba(255,92,53,0.3) 0%, transparent 70%)`,
            backgroundSize: "600px 30px",
          }}
        />
      </div>

      {/* ====================================================================
          LAYER 2: Glowing Animated Crescent Moon 🌙 with Breathing Glow
          ==================================================================== */}
      <div
        className="absolute top-[5%] left-[29%] sm:left-[30%] lg:left-[31%] z-10 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${moonOffsetX}px, ${-moonOffsetY}px, 0)`,
        }}
      >
        <div className="relative animate-moon-float">
          {/* Subtle Moon Atmospheric Halo Glow */}
          <div className="absolute -inset-4 rounded-full bg-[#ff5c35]/25 blur-xl animate-pulse" />

          {/* Pixel / Stylized Crescent Moon SVG */}
          <svg
            viewBox="0 0 100 100"
            className="w-14 h-14 sm:w-16 sm:h-16 text-[#ff5c35] drop-shadow-[0_0_15px_rgba(255,92,53,0.7)]"
            fill="currentColor"
          >
            <path d="M 50 10 A 40 40 0 1 0 90 50 A 30 30 0 1 1 50 10 Z" />
          </svg>
        </div>
      </div>

      {/* ====================================================================
          LAYER 3: The Cyber Pixel City Art Backdrop (Matching User Image)
          ==================================================================== */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${cityOffsetX}px, ${-cityOffsetY}px, 0)`,
        }}
      >
        {/* Full-width Pixel City Artwork (Decorative Ambient Layer) */}
        <img
          src="/images/cyber-bg.png"
          alt=""
          aria-hidden="true"
          decoding="async"
          fetchPriority="low"
          className="h-full w-full object-cover object-center opacity-85 select-none"
          style={{
            imageRendering: "pixelated",
          }}
        />
      </div>

      {/* ====================================================================
          LAYER 4: Blinking Building Lights, Antenna Beacons, & Server LEDs
          ==================================================================== */}
      <div
        className="absolute inset-0 transition-transform duration-150 ease-out"
        style={{
          transform: `translate3d(${cityOffsetX}px, ${-cityOffsetY}px, 0)`,
        }}
      >
        {/* 1. Antenna Tower Warning Beacons (Red/Orange Pulse) */}
        {antennaBeacons.map((beacon, idx) => (
          <div
            key={idx}
            className="absolute h-2 w-2 rounded-full bg-[#ff3300] shadow-[0_0_12px_#ff5c35] animate-beacon-pulse"
            style={{
              left: beacon.left,
              top: beacon.top,
              animationDelay: beacon.delay,
            }}
          />
        ))}

        {/* 2. Twinkling Skyscraper Windows ✨ */}
        {blinkingWindows.map((win, idx) => (
          <div
            key={idx}
            className="absolute h-[3px] w-[3px] sm:h-[4px] sm:w-[4px] animate-window-blink"
            style={{
              left: win.left,
              top: win.top,
              backgroundColor: win.color,
              boxShadow: `0 0 6px ${win.color}`,
              animationDelay: win.delay,
            }}
          />
        ))}

        {/* 3. Server Rack Blinking LEDs (Bottom Computer Node) */}
        {serverLeds.map((led, idx) => (
          <div
            key={idx}
            className="absolute h-[2px] w-[2px] sm:h-[3px] sm:w-[3px] animate-led-flicker"
            style={{
              left: led.left,
              top: led.top,
              backgroundColor: led.color,
              boxShadow: `0 0 5px ${led.color}`,
              animationDelay: led.delay,
            }}
          />
        ))}

        {/* 4. Left CRT Monitor Screen Pulse ("PLAY") */}
        <div
          className="absolute left-[19.2%] top-[77.8%] w-[6.5%] h-[7%] rounded-xs bg-[#ff5c35]/15 blur-[2px] animate-pulse"
          style={{ animationDuration: "3s" }}
        />
      </div>

      {/* ====================================================================
          LAYER 5: CRT Scanlines & Subtle Retro Arcade Flicker 📺
          ==================================================================== */}
      {/* Continuous Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Moving CRT Scanline Sweep Bar */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="h-24 w-full bg-gradient-to-b from-transparent via-[#ff5c35]/15 to-transparent animate-scanline-sweep" />
      </div>

      {/* CRT Subtle Screen Vignette for High Content Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, transparent 25%, rgba(5, 8, 6, 0.55) 75%, rgba(5, 8, 6, 0.94) 100%)",
        }}
      />

      {/* Subtle Vertical Gradient Fog to Ensure Foreground Text Pop */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-ink/75 via-transparent to-ink/90" />
    </div>
  );
}
