/** @jsx jsx */
import React from 'react';
import { jsx, Heading } from 'theme-ui';

export const Header: React.FCX = () => {
  return (
    <header
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <Heading as="h1" variant="heading" sx={{ fontSize: [8] }}>
        Portfolio
      </Heading>
      <Heading variant="heading" sx={{ fontSize: [4] }}>
        Hayato Kumazawa
      </Heading>
    </header>
  );
};

export default Header;
