import React from 'react';
import { Box } from '@chakra-ui/react';
import ProfileHeader from '../../organisms/ProfileHeader';
import ProfileContent from '../../organisms/ProfileContent';
import FloatingHomeButton from '../../molecules/FloatingHomeButton';
import Footer from '../../organisms/Footer';

export type ProfileTemplateProps = React.ComponentProps<typeof ProfileContent>;

export const ProfileTemplate: React.FCX<ProfileTemplateProps> = ({ sections, ...props }) => {
  return (
    <Box backgroundImage="linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)" minH={['100vh']} {...props}>
      <FloatingHomeButton
        position="fixed"
        top={['1rem', null, null, '2rem', '3rem']}
        right={['1rem', null, null, '2rem', '3rem']}
        zIndex={100}
        width={['4rem', '5rem', null, '6rem', '8rem']}
        height={['4rem', '5rem', null, '6rem', '8rem']}
        lineHeight={['4rem']}
        fontSize={['2.0rem', '3rem', null, '4rem', '5rem']}
      />
      <ProfileHeader textAlign="center" m={['auto']} />
      <Box as="main" my={['2rem']}>
        <ProfileContent sections={sections} />
      </Box>
      <Footer w={['100%']} m={['auto']} />
    </Box>
  );
};

export default ProfileTemplate;
