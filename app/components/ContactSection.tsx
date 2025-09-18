"use client";

import { useState, useEffect, useRef } from "react";

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showEmailOptions, setShowEmailOptions] = useState(false);
  const email = "sujithawijewantha@gmail.com";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowEmailOptions(false);
      }
    };

    if (showEmailOptions) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEmailOptions]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      // You could add a toast notification here
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const emailOptions = [
    {
      name: "GMAIL",
      action: () => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank')
    },
    {
      name: "OUTLOOK",
      action: () => window.open(`https://outlook.live.com/mail/0/deeplink/compose?to=${email}`, '_blank')
    },
    {
      name: "YAHOO",
      action: () => window.open(`https://compose.mail.yahoo.com/?to=${email}`, '_blank')
    },
    {
      name: "DEFAULT CLIENT",
      action: () => window.location.href = `mailto:${email}`
    },
    {
      name: "COPY EMAIL",
      action: copyToClipboard
    }
  ];

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
              <span className="bg-accent text-black px-2">
                TALENTED ENGINEER
              </span>
              ?
            </p>
            <p className="font-mono text-base sm:text-lg mt-4">
              MY INBOX IS{" "}
              <span className="bg-brutal-green text-black px-2">
                ALWAYS OPEN
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowEmailOptions(!showEmailOptions)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group inline-block"
              >
                <div className="bg-background text-foreground px-4 sm:px-8 py-3 sm:py-4 brutal-border brutal-box-shadow font-mono text-lg sm:text-xl uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_hsl(var(--primary))] transition-all">
                  {isHovered ? email : "SEND EMAIL →"}
                </div>
              </button>

              {showEmailOptions && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-background brutal-border brutal-box-shadow z-10 min-w-max">
                  {emailOptions.map((option, index) => (
                    <button
                      key={option.name}
                      onClick={() => {
                        option.action();
                        setShowEmailOptions(false);
                      }}
                      className={`block w-full text-left px-4 py-3 font-mono text-sm uppercase tracking-wider text-foreground hover:bg-primary hover:text-primary-foreground transition-colors ${
                        index !== emailOptions.length - 1 ? 'border-b border-foreground' : ''
                      }`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              href="/SujithaWijewanthaCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-4"
            >
              <div className="bg-brutal-yellow text-black px-4 sm:px-6 py-2 sm:py-3 brutal-border brutal-box-shadow font-mono text-sm sm:text-base uppercase tracking-wider hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">
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
