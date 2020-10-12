/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';
import PostTemplate from '../../templates/PostTemplate';

export const Post: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { filename } = props;
  const MDXContent = dynamic(() => import(`../../../articles/${filename}`));

  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="robots" content="nofollow" />
      </Head>
      <PostTemplate Article={MDXContent} />;
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const filenames = fs.readdirSync(articlesDirectory);
  const paths = filenames.map((filename) => ({
    params: { pid: filename.replace('.mdx', '') },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const preFilename = params ? params.pid : 'not-pages';
  const filename = `${preFilename}.mdx`;

  return {
    props: {
      filename,
    },
  };
};

export default Post;
