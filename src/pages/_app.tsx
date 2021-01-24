import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'theme-ui';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
