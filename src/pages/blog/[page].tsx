import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import BlogTemplate from '../../templates/BlogTemplate';
import { getMetadata, sortMetadata, range } from '../../libs/article-loader';

const COUNT_PER_PAGE = 10;

export const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts, page, total, perPage }) => {
  return (
    <React.Fragment>
      <Head>
        <title>競プロとWeb系コンテンツのブログ</title>
        <meta name="robots" content="noindex" />
        <meta name="robots" content="nofollow" />
      </Head>
      <BlogTemplate list={posts} page={page} total={total} perPage={perPage} />
    </React.Fragment>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const metadataList = getMetadata();
  const pages = range(Math.ceil(metadataList.length / COUNT_PER_PAGE));
  const paths = pages.map((page: number) => ({
    params: { page: `${page}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let page;
  if (params) {
    if (params.page) {
      if (typeof params.page === 'string') {
        page = parseInt(params.page, 10);
      } else {
        page = 1;
      }
    } else {
      page = 1;
    }
  } else {
    page = 1;
  }
  const end = COUNT_PER_PAGE * page;
  const start = end - COUNT_PER_PAGE;
  const metadataList = getMetadata();
  const posts = sortMetadata(metadataList);

  return {
    props: {
      posts: posts.slice(start, end > posts.length ? posts.length : end),
      page,
      total: posts.length,
      perPage: COUNT_PER_PAGE,
    },
  };
};

export default Blog;
