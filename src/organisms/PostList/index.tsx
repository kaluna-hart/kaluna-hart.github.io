import React from 'react';
import { Text, Layer, Toolbar, Tabs, Tab, List, ListItem, Pager, TabPanel } from 'sancho';
import styled from '@emotion/styled';
import Link from 'next/link';
import FloatingContainer from '../../atoms/FloatingContainer';
import FlexContainer from '../../atoms/FlexContainer';
import PostDescription from '../PostDescription';

const StyledText = styled(Text)``;

const StyledFlexContainer = styled(FlexContainer)``;

export type TPostListProps = {
  posts: string[];
  categories: string[];
};

export const PostList: React.FCX<TPostListProps> = (props) => {
  const { posts, categories, ...others } = props;
  const [index, setIndex] = React.useState(0);

  return (
    <Layer>
      <Toolbar>
        <StyledText>new post</StyledText>
      </Toolbar>
      <Tabs variant="evenly-spaced" value={index} onChange={(i) => setIndex(i)}>
        {categories.map((category) => (
          <Tab id={category} key={category}>
            {category}
          </Tab>
        ))}
      </Tabs>
      <Pager value={index} onRequestChange={(i) => setIndex(i)}>
        {categories.map((category) => (
          <TabPanel id={category} key={category}>
            <List>
              <ListItem contentBefore={} primary={} secondary={} contentAfter={} />
            </List>
          </TabPanel>
        ))}
      </Pager>
    </Layer>
  );
};

export default PostList;
// <Link href="/posts/[pid]" as={`/posts/${pid}`} key={}>
