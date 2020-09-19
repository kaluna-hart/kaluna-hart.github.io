import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const intialProps = await Document.getInitialProps(ctx);
    return { ...intialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cardo&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" />
        </Head>
        <Global
          styles={css`
            *,
            *::before,
            *::after {
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
            }
            html,
            body {
              width: 100%;
              height: 100%;
              margin: 0;
              font-size: 5vmin;
            }
          `}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
