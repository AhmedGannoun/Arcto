import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="description" content="Arcto - Modern Presentation Remote Control" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* SEO Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Arcto" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arctoapp" />
        <meta name="twitter:creator" content="@arctoapp" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}