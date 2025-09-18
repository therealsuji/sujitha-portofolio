"use client";

import { useState } from "react";

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const email = "sujithawijewantha@gmail.com";

  const socialLinks = [
    { name: "GITHUB", url: "https://github.com/therealsuji" },
    {
      name: "LINKEDIN",
      url: "https://www.linkedin.com/in/sujitha-wijewantha-457bb915b/",
    },
    {
      name: "STACKOVERFLOW",
      url: "https://stackoverflow.com/users/9802012/sujithaw",
    },
  ];

  return (
    <section
      id="contact-me"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-foreground text-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-display brutal-heading mb-6 sm:mb-8 text-center">
          LET&apos;S<span className="text-primary">/</span>CONNECT
        </h2>

        <div className="text-center space-y-6 sm:space-y-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-mono text-lg sm:text-xl mb-4">
              GOT A{" "}
              <span className="bg-primary text-background px-2">COOL PROJECT</span>{" "}
              IN MIND?
            </p>
            <p className="font-mono text-base sm:text-lg">
              NEED A{" "}
              <span className="bg-neutral-light text-foreground px-2">
                TALENTED ENGINEER
              </span>
              ?
            </p>
            <p className="font-mono text-base sm:text-lg mt-4">
              MY INBOX IS{" "}
              <span className="bg-primary text-background px-2">
                ALWAYS OPEN
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group inline-block"
            >
              <div className="bg-background text-foreground px-4 sm:px-8 py-3 sm:py-4 brutal-border brutal-box-shadow font-mono text-lg sm:text-xl uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_hsl(var(--primary))] transition-all">
                {isHovered ? email : "SEND EMAIL →"}
              </div>
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="font-mono text-xs sm:text-sm uppercase">OR FIND ME ON</span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background text-foreground px-2 sm:px-3 py-1 brutal-border font-mono text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/mycv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-4"
            >
              <div className="bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 brutal-border brutal-box-shadow font-mono text-sm sm:text-base uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">
                DOWNLOAD RESUME ↓
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
