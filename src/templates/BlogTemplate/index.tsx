/** @jsx jsx */
import React from 'react';
import { jsx, Text, Container } from 'theme-ui';
import BlogHeader from '../../organisms/BlogHeader';
import PostList from '../../organisms/PostList';

export type TBlogTemplateProps = {
  temp?: string;
};

const testPosts = ['test1', 'test2'];

const testTabCategories = ['rust', 'typescript'];

export const BlogTemplate: React.FCX<TBlogTemplateProps> = () => {
  return (
    <React.Fragment>
      <BlogHeader />
      <PostList posts={testPosts} tabCategories={testTabCategories} />
      <Container sx={{ textAlign: 'center', mt: ['40%'] }}>
        <Text sx={{ fontFamily: 'cursive', fontSize: ['2em', '3em', '4em', '5em'] }}>Coming Soon</Text>
      </Container>
    </React.Fragment>
  );
};

export default BlogTemplate;
// <StyledFloatingMenu />
