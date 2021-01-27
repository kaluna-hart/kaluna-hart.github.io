/** @jsx jsx */
import React from 'react';
import { jsx, Heading, Container, Text } from 'theme-ui';
import ArticleList from '../ArticleList';
import { MetadataSet } from '../../libs/article-loader';

export type PostListProps = {
  posts: MetadataSet[];
};

export const PostList: React.FCX<PostListProps> = ({ posts, ...props }) => (
  <Container variant="styles.blog.postList" {...props}>
    <Heading sx={{ textAlign: 'center' }}>
      -----<Text sx={{ display: 'inline', fontWeight: 'bolder' }}>アーカイブ</Text>-----
    </Heading>
    <ArticleList posts={posts} />
  </Container>
);
export default PostList;
