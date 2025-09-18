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
      className="px-6 md:px-12 lg:px-20 py-20 bg-foreground text-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-display brutal-heading mb-8 text-center">
          LET&apos;S<span className="text-primary">/</span>CONNECT
        </h2>

        <div className="text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <p className="font-mono text-xl mb-4">
              GOT A{" "}
              <span className="bg-primary text-black px-2">COOL PROJECT</span>{" "}
              IN MIND?
            </p>
            <p className="font-mono text-lg">
              NEED A{" "}
              <span className="bg-accent text-black px-2">
                TALENTED ENGINEER
              </span>
              ?
            </p>
            <p className="font-mono text-lg mt-4">
              MY INBOX IS{" "}
              <span className="bg-brutal-green text-black px-2">
                ALWAYS OPEN
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group inline-block"
            >
              <div className="bg-background text-foreground px-8 py-4 brutal-border brutal-box-shadow font-mono text-xl uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_hsl(var(--primary))] transition-all">
                {isHovered ? email : "SEND EMAIL →"}
              </div>
            </a>

            <div className="flex items-center gap-4">
              <span className="font-mono text-sm uppercase">OR FIND ME ON</span>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background text-foreground px-3 py-1 brutal-border font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
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
              className="mt-4"
            >
              <div className="bg-brutal-yellow text-black px-6 py-3 brutal-border brutal-box-shadow font-mono uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">
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
