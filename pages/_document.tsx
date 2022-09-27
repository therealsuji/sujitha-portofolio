import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <div id="globalLoader">
        <img src="/loader.gif" alt="...Loading" />
      </div>
    </Html>
  );
}
