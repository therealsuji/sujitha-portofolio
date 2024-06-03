"use client";

import Image from "next/image";
import { DOWN_ICON, WAVE_IMAGE } from "../../utils/assets";
import { useSpring, animated } from "@react-spring/web";

const AboutMe = () => {
  const scrollToAboutMe = () => {
    document.querySelector("#about-me")?.scrollIntoView();
  };

  const styles = useSpring({
    from: { rotate: 0 },
    to: [
      { rotate: 25, config: { duration: 150 } }, // Rotate to 25 degrees
      { rotate: 0, config: { duration: 150 } }, // Rotate back to 0 degrees
    ],
    config: { duration: 300 }, // Animation duration
  });

  return (
    <>
      <div className="flex gap-2 items-center text-xl">
        Hello there{" "}
        <animated.div style={{ display: "inline-block", ...styles }}>
          <Image width="20" height="20" src={WAVE_IMAGE} alt="👋" />{" "}
        </animated.div>
        {"I'm"}
      </div>
      <div className="text-name-gradient text-6xl font-semibold  ">
        Sujitha Wijewantha
      </div>
      <div className="text-3xl  ">I make stuff for the web</div>
      <div className="mt-2 text-xl">
        {"I'm "}a software engineer that specializes in building amazing
        products.
      </div>
      <div
        className="w-full flex justify-center mt-auto mb-10 cursor-pointer"
        onClick={scrollToAboutMe}
      >
        <Image
          width={30}
          height={30}
          className="animate-bounce filter-gray-color "
          src={DOWN_ICON}
          alt="Click Me"
        />
      </div>
    </>
  );
};

export default AboutMe;
