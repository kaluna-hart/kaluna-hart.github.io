import React from 'react';
import { Box, BoxProps, Heading } from '@chakra-ui/react';

export const ProfileHeader: React.FC<BoxProps> = ({ ...props }) => (
  <Box as="header" {...props}>
    <Heading as="h1" fontFamily="Dancing Script" fontSize={['3rem', '4rem']}>
      Profile
    </Heading>
  </Box>
);

export default ProfileHeader;
