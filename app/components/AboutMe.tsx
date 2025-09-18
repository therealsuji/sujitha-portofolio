"use client";

import { useEffect, useState } from "react";

const AboutMe = () => {
  const scrollToAboutMe = () => {
    document.querySelector("#about-me")?.scrollIntoView({ behavior: "smooth" });
  };

  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center h-full relative">
      <div className="space-y-6">
        <div className="text-lg sm:text-xl md:text-3xl font-mono uppercase tracking-wider">
          <span className="inline-block bg-brutal-yellow text-black px-2 sm:px-3 py-1 brutal-border brutal-box-shadow-sm">
            HELLO, WORLD!
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display brutal-heading leading-tight ${
            glitch ? "glitch-text" : "brutal-shadow"
          }`}
        >
          SUJITHA
          <br />
          <span className="text-primary">WIJEWANTHA</span>
        </h1>

        <div className="space-y-3">
          <div className="inline-block">
            <p className="text-lg sm:text-xl md:text-2xl font-mono bg-secondary text-secondary-foreground px-3 sm:px-4 py-2 brutal-border brutal-box-shadow">
              FULLSTACK ENGINEER
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-mono max-w-2xl leading-relaxed">
            I BUILD{" "}
            <span className="bg-primary text-primary-foreground px-2">
              ROBUST
            </span>{" "}
            WEB EXPERIENCES WITH{" "}
            <span className="bg-accent text-accent-foreground px-2">
              MODERN
            </span>{" "}
            TECH
          </p>
        </div>
      </div>

      <button
        onClick={scrollToAboutMe}
        className="absolute md:bottom-10 -bottom-1/2 left-1/2 md:left-[55%] transform -translate-x-1/2 group"
        aria-label="Scroll to about section"
      >
        <div className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 brutal-border brutal-box-shadow font-mono text-sm sm:text-base uppercase tracking-wider hover:translate-y-1 hover:shadow-sm transition-all">
          EXPLORE ↓
        </div>
      </button>
    </div>
  );
};

export default AboutMe;
