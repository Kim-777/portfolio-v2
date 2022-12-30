import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>kim-skills</title>
        <meta name="description" content="kimyechan portfolio index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kim yechan Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/among.jpeg" />
        <meta property="og:description" content="김예찬의 포트폴리오" />
        <link rel="icon" href="/circle-among.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
