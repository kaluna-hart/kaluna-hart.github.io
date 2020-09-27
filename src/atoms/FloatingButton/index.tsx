/** @jsx jsx */
import React from 'react';
import { jsx, IconButton, Box } from 'theme-ui';
import Link from 'next/link';

export type TFloatingButtonProps = {
  to: string;
};

export const FloatingButton: React.FCX<TFloatingButtonProps> = ({ children, to, ...props }) => {
  return (
    <Box {...props} sx={{ variant: 'buttons.floating' }}>
      <Link href={to}>{children}</Link>
    </Box>
  );
};

export default FloatingButton;
