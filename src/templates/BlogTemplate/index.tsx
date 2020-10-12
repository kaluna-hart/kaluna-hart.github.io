/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Head from 'next/head';
import BlogHeader from '../../organisms/BlogHeader';
import PostList from '../../organisms/PostList';
import { MetadataSet } from '../../libs/article-loader';
import FloatingHomeButton from '../../molecules/FloatingHomeButton';
import Pager from '../../organisms/Pager';
import Footer from '../../organisms/Footer';

export type BlogTemplateProps = {
  list: MetadataSet[];
  page: number;
  total: number;
  perPage: number;
};

export const BlogTemplate: React.FCX<BlogTemplateProps> = ({ list, page, total, perPage }) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <FloatingHomeButton
        sx={{
          position: 'fixed',
          top: ['0.2em', '0em', '0.4em', '0.1em'],
          right: ['0.5em', '0.3em', '0.4em', '0.6em'],
          zIndex: 100,
          width: ['2em'],
          height: ['2em'],
          lineHeight: ['2em'],
          fontSize: ['2.0em', '3em', null, '4em'],
        }}
      />
      <BlogHeader />
      <main>
        <PostList
          posts={list}
          sx={{
            minWidth: ['500px', '600px', '700px'],
            maxWidth: ['500px', '700px', '900px'],
            pt: ['2.0em'],
            mb: ['6em', '5em'],
          }}
        />
      </main>
      <Pager
        page={page}
        total={total}
        perPage={perPage}
        href="/blog/[page]"
        asCallback={(pageid) => `/blog/${pageid}`}
        sx={{
          position: 'fixed',
          bottom: ['2.5em'],
          right: '10%',
          zIndex: 100,
          width: ['80%'],
          height: ['3em'],
        }}
      />
      <Footer sx={{ width: '100%', height: '10%', mx: 'auto' }} />
    </React.Fragment>
  );
};

export default BlogTemplate;
