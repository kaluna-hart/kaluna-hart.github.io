/** @jsx jsx */
import React from 'react';
import { jsx, Heading } from 'theme-ui';

export const PostHeader: React.FCX = () => (
  <header sx={{ variant: 'layout.pageHeader' }}>
    <Heading sx={{ fontFamily: 'inherit' }}>Kaluna &bull; Hart</Heading>
  </header>
);

export default PostHeader;
