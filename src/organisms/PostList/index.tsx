/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import FloatingContainer from '../../atoms/FloatingContainer';

export type TPostListProps = {
  posts: string[];
  tabCategories: string[];
};

export const PostList: React.FCX<TPostListProps> = () => {
  return <FloatingContainer />;
};
export default PostList;
// <Link href="/posts/[pid]" as={`/posts/${pid}`} key={}>
