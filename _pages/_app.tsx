import "../styles/globals.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({
      once: true,
      offset: 50,
    });
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.remove();
    }
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
