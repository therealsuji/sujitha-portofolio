"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "../../components/ThemeToggle";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate there first
    if (pathname !== '/') {
      router.push(href);
      return;
    }

    // Extract the hash from the href
    const targetId = href.replace('/#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Close mobile menu if open
    setIsOpen(false);
  };

  const navItems = [
    { href: "/#about-me", label: "ABOUT" },
    { href: "/#experience", label: "WORK" },
    { href: "/#cool-stuff", label: "PROJECTS" },
    { href: "/#contact-me", label: "CONTACT" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background border-b-4 border-foreground" : ""
      }`}>
        <div className="px-6 md:px-12 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="font-display text-2xl font-bold">
                <span className="bg-primary text-primary-foreground px-2 py-1 brutal-border group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  SW
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-mono text-sm uppercase tracking-wider hover:text-primary transition-colors relative group cursor-pointer"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}

              <a
                href="/SujithaWijewanthaCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm bg-brutal-yellow text-black px-4 py-2 brutal-border brutal-box-shadow-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform uppercase tracking-wider"
              >
                RESUME
              </a>

              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-1 bg-foreground transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
              <span className={`block w-6 h-1 bg-foreground transition-all ${
                isOpen ? "opacity-0" : ""
              }`}></span>
              <span className={`block w-6 h-1 bg-foreground transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-background transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="h-full flex flex-col justify-center items-center gap-8 p-8">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-display text-4xl font-bold uppercase brutal-shadow hover:text-primary transition-colors cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/SujithaWijewanthaCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4"
          >
            <div className="bg-brutal-yellow text-black px-8 py-4 brutal-border brutal-box-shadow font-mono uppercase tracking-wider">
              DOWNLOAD RESUME
            </div>
          </a>

          <div className="mt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-14 sm:h-16"></div>
    </>
  );
};

export default Navbar;