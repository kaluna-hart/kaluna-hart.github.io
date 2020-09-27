/** @jsx jsx */
import React from 'react';
import { jsx, Container } from 'theme-ui';
import { ProfileSection, TProfileSectionProps } from '../../molecules/ProfileSection';

export type TProfileContentProps = {
  sections: TProfileSectionProps[];
};

export const ProfileContent: React.FCX<TProfileContentProps> = (props) => {
  const { sections } = props;
  return (
    <Container sx={{ variant: 'profile.container' }}>
      {sections.map((section) => (
        <ProfileSection {...section} key={section.sectionHeader} sx={{ my: '5px' }} />
      ))}
    </Container>
  );
};

export default ProfileContent;
