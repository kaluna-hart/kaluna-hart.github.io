/** @jsx jsx */
import { jsx, Button, Box } from 'theme-ui';
import React from 'react';
import Link from 'next/link';

export const BlogButton: React.FC = () => {
  return (
    <Box>
      <Link href="/blog">
        <Button sx={{ width: '100%', height: '100%', fontSize: [4] }}>Blog</Button>
      </Link>
    </Box>
  );
};

export default BlogButton;
