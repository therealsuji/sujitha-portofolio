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
        <div className="text-2xl md:text-3xl font-mono uppercase tracking-wider">
          <span className="inline-block bg-brutal-yellow text-black px-3 py-1 brutal-border brutal-box-shadow-sm">
            HELLO, WORLD!
          </span>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-display brutal-heading ${glitch ? 'glitch-text' : 'brutal-shadow'}`}>
          SUJITHA<br/>
          <span className="text-primary">WIJEWANTHA</span>
        </h1>

        <div className="space-y-3">
          <div className="inline-block">
            <p className="text-xl md:text-2xl font-mono bg-secondary text-secondary-foreground px-4 py-2 brutal-border brutal-box-shadow">
              FULLSTACK ENGINEER
            </p>
          </div>
          <p className="text-lg md:text-xl font-mono max-w-2xl">
            I BUILD <span className="bg-primary text-primary-foreground px-2">ROBUST</span> WEB
            EXPERIENCES WITH <span className="bg-accent text-accent-foreground px-2">MODERN</span> TECH
          </p>
        </div>
      </div>

      <button
        onClick={scrollToAboutMe}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 group"
        aria-label="Scroll to about section"
      >
        <div className="bg-primary text-primary-foreground px-6 py-3 brutal-border brutal-box-shadow font-mono uppercase tracking-wider hover:translate-y-1 hover:shadow-sm transition-all">
          EXPLORE ↓
        </div>
      </button>
    </div>
  );
};

export default AboutMe;