/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
// import { Text, Layer, Toolbar, Tabs, Tab, List, ListItem, Pager, TabPanel, IconHome } from 'sancho';
// import styled from '@emotion/styled';
import Link from 'next/link';
import FloatingContainer from '../../atoms/FloatingContainer';
import PostDescription from '../PostDescription';

// const StyledText = styled(Text)``;

// const StyledFlexContainer = styled(FlexContainer)``;

export type TPostListProps = {
  posts: string[];
  tabCategories: string[];
};

export const PostList: React.FCX<TPostListProps> = (props) => {
  const { posts, tabCategories } = props;
  const [index, setIndex] = React.useState(0);
  const categories = posts;

  return <FloatingContainer />;
};
export default PostList;
// <Link href="/posts/[pid]" as={`/posts/${pid}`} key={}>
