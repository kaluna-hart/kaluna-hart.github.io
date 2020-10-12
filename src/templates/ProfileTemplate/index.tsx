/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import ProfileHeader from '../../organisms/ProfileHeader';
import ProfileContent from '../../organisms/ProfileContent';
import FloatingHomeButton from '../../molecules/FloatingHomeButton';
import Footer from '../../organisms/Footer';

export type ProfileTemplateProps = React.ComponentProps<typeof ProfileContent>;

export const ProfileTemplate: React.FCX<ProfileTemplateProps> = (props) => {
  const { sections } = props;
  return (
    <React.Fragment>
      <FloatingHomeButton
        sx={{
          position: 'fixed',
          top: ['0.2em', '0em', '0.4em', '0.1em'],
          right: ['0.5em', '0.3em', '0.4em', '0.6em'],
          zIndex: 100,
          width: ['2em'],
          height: ['2em'],
          lineHeight: ['2em'],
          fontSize: ['2.0em', '3em', null, '4em'],
        }}
      />
      <ProfileHeader sx={{ textAlign: 'center', m: 'auto' }} />
      <main>
        <ProfileContent sections={sections} />
      </main>
      <Footer sx={{ width: '100%', height: '10%', mx: 'auto' }} />
    </React.Fragment>
  );
};

export default ProfileTemplate;
