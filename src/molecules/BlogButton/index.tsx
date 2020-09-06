import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import IconButton from '@material-ui/core/IconButton';

const StyledIconButton = styled(IconButton)`
  width: 100%;
  height: 100%;
`;

export const BlogButton: React.FC = () => {
  return (
    <div>
      <Link href="/blog">
        <StyledIconButton>Blog</StyledIconButton>
      </Link>
    </div>
  );
};

export default BlogButton;
