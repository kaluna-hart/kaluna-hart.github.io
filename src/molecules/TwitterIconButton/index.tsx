/** @jsx jsx */
import React from 'react';
import { jsx, IconButton, Box, Link } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const TwitterIconButton: React.FC = () => {
  return (
    <Box>
      <Link href="https://twitter.com/hakut0112">
        <IconButton sx={{ width: '100%', height: '100%' }}>
          <FontAwesomeIcon icon={faTwitter} sx={{ fontSize: [6] }} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default TwitterIconButton;
