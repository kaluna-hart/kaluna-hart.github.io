import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import styled from '@emotion/styled';

const StyledLink = styled(Link)({
  width: '100%',
  height: '100%',
});

const StyledIconButton = styled(IconButton)`
  width: 100%;
  height: 100%;
`;

export const TwitterIconButton: React.FC = () => {
  return (
    <div>
      <StyledLink href="https://twitter.com/hakut0112">
        <StyledIconButton size="medium">
          <TwitterIcon style={{ fontSize: '2.5rem' }} />
        </StyledIconButton>
      </StyledLink>
    </div>
  );
};

export default TwitterIconButton;
