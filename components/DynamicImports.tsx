import Aos from "aos";
import { useEffect } from "react";

export const AosImporter = () => {
  Aos.init({
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
  });

  return <></>;
};
