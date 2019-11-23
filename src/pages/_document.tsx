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
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Cardo&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap"
          />
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
