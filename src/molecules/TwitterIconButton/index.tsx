import React from 'react';
import { Box, BoxProps, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

export const TwitterIconButton: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <a href="https://twitter.com/hakut0112">
        <IconButton
          aria-label="Github"
          icon={<FontAwesomeIcon icon={faTwitter} />}
          w={['4rem']}
          h={['4rem']}
          borderRadius="50%"
          boxShadow="8px 8px 25px #b3b6b8, -8px -8px 25px #ffffff"
          fontSize={['3rem']}
          _hover={{ boxShadow: 'none' }}
        />
      </a>
    </Box>
  );
};

export default TwitterIconButton;
