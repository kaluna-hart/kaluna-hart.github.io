import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import * as gtag from '../libs/gtag';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider>
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width " />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
