import React from 'react';
import { Text } from 'sancho';
import Section from '../../atoms/Section';

export type TProfileSectionProps = {
  sectionHeader: string;
  sectionContent: React.ReactNode;
};

export const ProfileSection: React.FCX<TProfileSectionProps> = (props) => {
  const { sectionHeader, sectionContent } = props;
  return (
    <Section>
      <Text variant="h1" wrap={false}>
        {sectionHeader}
      </Text>
      {sectionContent}
    </Section>
  );
};
