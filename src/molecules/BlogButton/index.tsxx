/** @jsx jsx */
import { jsx, Button, Box, Link as TLink } from 'theme-ui';
import React from 'react';
import Link from 'next/link';

export const BlogButton: React.FC = () => {
  return (
    <Box>
      <Link href="/blog/1" passHref>
        <TLink rel="nofollow">
          <Button
            sx={{
              width: '100%',
              height: '100%',
              fontSize: [4],
              borderRadius: '16px',
              boxShadow: '8px 8px 25px #b3b6b8, -8px -8px 25px #ffffff',
              '&:hover': {
                boxShadow: 'none',
              },
            }}
          >
            Blog
          </Button>
        </TLink>
      </Link>
    </Box>
  );
};

export default BlogButton;
