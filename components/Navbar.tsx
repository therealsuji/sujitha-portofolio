import { useState, useEffect } from "react";
import { Button } from "./Button";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      data-aos="fade-up"
      className={`${styles.navbar} ${visible ? "top-0" : "-top-40"}`}
    >
      <div className="flex justify-between max-w-3xl mx-auto items-center">
        <div className="flex gap-5">
          <span>
            <a href="#about-me"> About Me </a>
          </span>
          <span>
            <a href="#experience"> Experience </a>
          </span>
          <span>
            <a href="#my-work"> My Work </a>
          </span>
          <span>
            <a href="#contact-me"> Contact Me </a>
          </span>
        </div>
        <div>
          <a href="mycv.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="p-2">Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
};
