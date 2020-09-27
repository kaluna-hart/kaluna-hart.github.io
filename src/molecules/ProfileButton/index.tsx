/** @jsx jsx */
import React from 'react';
import { jsx, Button, Box } from 'theme-ui';
import Link from 'next/link';

export const ProfileButton: React.FC = () => {
  return (
    <Box>
      <Link href="/profile">
        <Button sx={{ width: '100%', height: '100%', fontSize: [4] }}>Profile</Button>
      </Link>
    </Box>
  );
};

export default ProfileButton;
