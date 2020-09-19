import React from 'react';
import BlogHeader from '../../organisms/BlogHeader';
import PostList from '../../organisms/PostList';
import FloatingHomeButton from '../../molecules/FloatingHomeButton';
import FloatingProfileButton from '../../molecules/FloatingProfileButton';

export type TBlogTemplateProps = {
  temp?: string;
};

export const BlogTemplate: React.FCX<TBlogTemplateProps> = (props) => {
  const { ...others } = props;
  return (
    <React.Fragment>
      <BlogHeader />
      <PostList />
      <FloatingHomeButton />
      <FloatingProfileButton />
    </React.Fragment>
  );
};

export default BlogTemplate;
