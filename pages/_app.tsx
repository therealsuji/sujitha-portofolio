import "../styles/globals.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
