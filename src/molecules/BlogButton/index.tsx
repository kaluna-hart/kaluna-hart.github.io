/** @jsx jsx */
import { jsx, Button, Box, Link as TLink } from 'theme-ui';
import React from 'react';
import Link from 'next/link';

export const BlogButton: React.FC = () => {
  return (
    <Box>
      <Link href="/blog/1" passHref>
        <TLink rel="nofollow">
          <Button sx={{ width: '100%', height: '100%', fontSize: [4] }}>Blog</Button>
        </TLink>
      </Link>
    </Box>
  );
};

export default BlogButton;
