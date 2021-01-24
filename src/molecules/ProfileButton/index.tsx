/** @jsx jsx */
import React from 'react';
import { jsx, Button, Box } from 'theme-ui';
import Link from 'next/link';

export const ProfileButton: React.FC = () => {
  return (
    <Box>
      <Link href="/profile">
        <Button
          sx={{
            width: '100%',
            height: '100%',
            fontSize: [4],
            borderRadius: '16px',
            boxShadow: '8px 8px 25px #b3b6b8, -8px -8px 25px #ffffff',
            '&:hover': {
              boxShadow: 'none',
            },
          }}
        >
          Profile
        </Button>
      </Link>
    </Box>
  );
};

export default ProfileButton;
