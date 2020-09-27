/** @jsx jsx */
import React from 'react';
import { jsx, IconButton, Link, Box } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const GitHubIconButton: React.FC = () => {
  return (
    <Box>
      <Link href="https://github.com/faluna">
        <IconButton sx={{ width: '100%', height: '100%' }}>
          <FontAwesomeIcon icon={faGithub} sx={{ fontSize: [6] }} />
        </IconButton>
      </Link>
    </Box>
  );
};

export default GitHubIconButton;
