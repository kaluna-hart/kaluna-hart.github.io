/** @jsx jsx */
import React from 'react';
import { jsx, Heading, Box } from 'theme-ui';

export type TProfileSectionProps = {
  sectionHeader: string;
  sectionContent: React.ReactNode;
};

export const ProfileSection: React.FCX<TProfileSectionProps> = (props) => {
  const { sectionHeader, sectionContent } = props;
  return (
    <Box sx={{ variant: 'profile.section' }}>
      <Heading sx={{ fontSize: [3] }} as="h2">
        {sectionHeader}
      </Heading>
      {sectionContent}
    </Box>
  );
};
