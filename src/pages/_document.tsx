import { Head, Html, Main, NextScript } from "next/document";
import { augmentDocumentWithEmotionCache } from "./_app";
import React from "react";

const MyDocument = () => {
  augmentDocumentWithEmotionCache(MyDocument);

  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Keyboard Shortcuts Cheatsheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,100&display=swap"
          rel="stylesheet"
        />
        <title>Handy Tools by High Priority</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
