import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
