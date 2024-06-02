"use client";

import Image from "next/image";
import { DOWN_ICON } from "../../utils/assets";

const AboutMe = () => {
  const scrollToAboutMe = () => {
    document.querySelector("#about-me")?.scrollIntoView();
  };

  return (
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
  );
};

export default AboutMe;
