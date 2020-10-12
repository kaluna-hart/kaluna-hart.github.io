/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';
import RustIcon from '@svg/rust.svg';

export const RustSvg: React.FCX = (props) => (
  <Box>
    <RustIcon {...props} />;
  </Box>
);

export default RustSvg;
