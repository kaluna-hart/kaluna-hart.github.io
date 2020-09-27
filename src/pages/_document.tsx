import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const intialProps = await Document.getInitialProps(ctx);
    return intialProps;
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cardo&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.9.0/themes/prism-tomorrow.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
