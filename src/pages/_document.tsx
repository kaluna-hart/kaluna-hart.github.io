import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

import { GA_TRACKING_ID } from '../libs/gtag';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const intialProps = await Document.getInitialProps(ctx);
    return intialProps;
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cardo&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Dancing+Script&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
