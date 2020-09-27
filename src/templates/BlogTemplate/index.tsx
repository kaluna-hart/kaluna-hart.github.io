/** @jsx jsx */
import React from 'react';
import { jsx, Text, Container } from 'theme-ui';
import BlogHeader from '../../organisms/BlogHeader';
import PostList from '../../organisms/PostList';
import FloatingMenu from '../../organisms/FloatingMenu';

const StyledFloatingMenu = `
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 5px;
`;

export type TBlogTemplateProps = {
  temp?: string;
};

const testPosts = ['test1', 'test2'];

const testTabCategories = ['rust', 'typescript'];

export const BlogTemplate: React.FCX<TBlogTemplateProps> = (props) => {
  return (
    <React.Fragment>
      <BlogHeader />
      <PostList posts={testPosts} tabCategories={testTabCategories} />
      <FloatingMenu />
      <Container sx={{ textAlign: 'center', mt: ['40%'] }}>
        <Text sx={{ fontFamily: 'cursive', fontSize: ['2em', '3em', '4em', '5em'] }}>Coming Soon</Text>
      </Container>
    </React.Fragment>
  );
};

export default BlogTemplate;
// <StyledFloatingMenu />
