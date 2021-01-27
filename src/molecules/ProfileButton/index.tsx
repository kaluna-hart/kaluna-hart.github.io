import React from 'react';
import Link from 'next/link';
import { Button, Box, BoxProps } from '@chakra-ui/react';

export const ProfileButton: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <Link href="/profile">
        <Button
          w={['8rem']}
          h={['4rem', '5rem']}
          fontSize={['2rem']}
          borderRadius={['1rem']}
          boxShadow="8px 8px 25px #b3b6b8, -8px -8px 25px #ffffff"
          _hover={{ boxShadow: 'none' }}
          fontFamily="serif"
        >
          Profile
        </Button>
      </Link>
    </Box>
  );
};

export default ProfileButton;
