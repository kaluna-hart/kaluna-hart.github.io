import React from 'react';
import { Text } from 'sancho';

export const BlogHeader: React.FCX = (props) => (
  <header {...props}>
    <Text variant="display1" wrap={false}>
      Blog
    </Text>
    <Text>written by kaluna#8228Hart</Text>
  </header>
);

export default BlogHeader;
