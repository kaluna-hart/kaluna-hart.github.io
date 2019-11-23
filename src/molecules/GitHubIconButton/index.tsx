import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import styled from '@emotion/styled';

const StyledIconButton = styled(IconButton)`
  width: 100%;
  height: 100%;
`;

export default function GitHubIconButton() {
  return (
    <div>
      <Link href="https://github.com/faluna">
        <StyledIconButton size="medium">
          <GitHubIcon style={{fontSize: '2.5rem'}} />
        </StyledIconButton>
      </Link>
    </div>
  );
}
