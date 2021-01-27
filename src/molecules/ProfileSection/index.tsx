import React from 'react';
// import { jsx, Heading, Box } from 'theme-ui';
import { Box, Heading, BoxProps } from '@chakra-ui/react';

export type ProfileSectionProps = {
  sectionHeader: string;
  sectionContent: React.ReactNode;
};

export const ProfileSection: React.FC<ProfileSectionProps & BoxProps> = ({ ...props }) => {
  const { sectionHeader, sectionContent } = props;
  return (
    <Box
      display="inline-block"
      textAlign="left"
      position="relative"
      border="solid 1px rgba(255,255,255,0.18)"
      background="rgba(255,255,255,0.45)"
      boxShadow="0 8px 32px 0 rgba(31,38,135,0.37)"
      backdropFilter="blur(4.0px)"
      borderRadius="10px"
      mx={['auto']}
      w={['100%']}
      {...props}
    >
      <Box
        position="absolute"
        top={['-1rem']}
        left={['1rem']}
        borderRadius={['0.5rem', '10px']}
        background="rgba(255,255,255,0.70)"
        boxShadow="0 8px 32px 0 rgba(31,38,135,0.37)"
        backdropFilter="blur(7.0px)"
        border="1px solid rgba(255,255,255,0.18)"
        p={['0.1rem']}
      >
        <Heading fontSize={['1.5rem']}>{sectionHeader}</Heading>
      </Box>
      {sectionContent}
    </Box>
  );
};
