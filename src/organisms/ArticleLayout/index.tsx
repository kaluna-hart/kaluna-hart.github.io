/** @jsx jsx */
import React from 'react';
import { jsx, Heading, Container } from 'theme-ui';
import Head from 'next/head';

export type Author = {
  firstName: string;
  lastName: string;
};

export type ArticleDate = {
  year: number;
  month: number;
  day: number;
};

export type Metadata = {
  title: string;
  categories: string[];
  releaseDate: ArticleDate;
  updateDate?: ArticleDate;
  authors: Author[];
  articleIconName: string;
};

export const mainAuthor: Author = {
  firstName: 'Hayato',
  lastName: 'Kumazawa',
};

export type ArticleLayoutProps = {
  metadata: Metadata;
};

export const ArticleLayout: React.FCX<ArticleLayoutProps> = ({ children, metadata, ...props }) => (
  <Container
    {...props}
    sx={{ borderBottom: 'solid 0.1em', width: ['98%', '90%', '80%'], maxWidth: [null, '40em', '50em'] }}
  >
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content="" key="description" />
      <meta property="og:description" content="" key="og:description" />
      <meta property="og:title" content={metadata.title} key="og:title" />
    </Head>
    <header>
      <Heading as="h1" sx={{ fontFamily: 'body' }}>
        {metadata.title}
      </Heading>
    </header>
    <main>{children}</main>
  </Container>
);

export default ArticleLayout;
// <meta property="og:image" content={} key="og:image" />
// <meta property="twitter:image" content={} key="twitter: image" />
// <meta itemProp="image" property="og:image" content={} />
