import React from 'react';
import { Box, Heading, BoxProps } from '@chakra-ui/react';

export const Header: React.FCX<BoxProps> = ({ ...props }) => {
  return (
    <Box as="header" textAlign="center" {...props}>
      <Heading as="h1" fontFamily="Cardo" fontSize={['3rem', '4rem']}>
        Portfolio
      </Heading>
      <Heading fontFamily="Cardo" fontSize={['2rem']}>
        Hayato Kumazawa
      </Heading>
    </Box>
  );
};

export default Header;
