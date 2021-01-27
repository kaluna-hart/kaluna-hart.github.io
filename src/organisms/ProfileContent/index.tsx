import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { ProfileSection, ProfileSectionProps } from '../../molecules/ProfileSection';

export type ProfileContentProps = {
  sections: ProfileSectionProps[];
};

export const ProfileContent: React.FCX<ProfileContentProps & BoxProps> = ({ ...props }) => {
  const { sections } = props;
  return (
    <Box textAlign={['center']} w={[null, null, '46rem', null, '56rem']} mx={['1rem', null, 'auto']} {...props}>
      {sections.map((section) => (
        <ProfileSection {...section} key={section.sectionHeader} sx={{ my: '1rem' }} />
      ))}
    </Box>
  );
};

export default ProfileContent;
