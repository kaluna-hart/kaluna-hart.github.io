/** @jsx jsx */
import React from 'react';
import { jsx, Container } from 'theme-ui';
import { ProfileSection, ProfileSectionProps } from '../../molecules/ProfileSection';

export type ProfileContentProps = {
  sections: ProfileSectionProps[];
};

export const ProfileContent: React.FCX<ProfileContentProps> = (props) => {
  const { sections } = props;
  return (
    <Container variant="profileContent">
      {sections.map((section) => (
        <ProfileSection {...section} key={section.sectionHeader} sx={{ my: '5px' }} />
      ))}
    </Container>
  );
};

export default ProfileContent;
