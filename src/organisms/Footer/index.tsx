import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import Copyright from '../../molecules/Copyright';

export const Footer: React.FCX<BoxProps> = ({ ...props }) => {
  return (
    <Box as="footer" {...props}>
      <Copyright />
    </Box>
  );
};

export default Footer;
