/** @jsx jsx */
import React from 'react';
import { jsx, Heading } from 'theme-ui';

export const PostHeader: React.FCX = () => (
  <section sx={{ variant: 'layout.pageHeader' }}>
    <Heading sx={{ fontFamily: 'inherit' }}>Kaluna &bull; Hart</Heading>
  </section>
);

export default PostHeader;
