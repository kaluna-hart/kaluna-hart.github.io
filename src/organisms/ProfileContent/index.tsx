import React from 'react';
import styled from '@emotion/styled';
import { ProfileSection, TProfileSectionProps } from '../../molecules/ProfileSection';

const Container = styled.div`
  text-align: center;
`;

export type TProfileContentProps = {
  sections: TProfileSectionProps[];
};

export const ProfileContent: React.FCX<TProfileContentProps> = (props) => {
  const { sections } = props;
  return (
    <Container>
      {sections.map((section) => (
        <ProfileSection {...section} key={section.sectionHeader} />
      ))}
    </Container>
  );
};

export default ProfileContent;
