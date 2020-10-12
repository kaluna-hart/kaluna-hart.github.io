/** @jsx jsx */
import React from 'react';
import { jsx, Heading, Box } from 'theme-ui';

export type ProfileSectionProps = {
  sectionHeader: string;
  sectionContent: React.ReactNode;
};

export const ProfileSection: React.FCX<ProfileSectionProps> = (props) => {
  const { sectionHeader, sectionContent } = props;
  return (
    <Box variant="styles.profile.section">
      <Heading sx={{ fontSize: [3] }} as="h2">
        {sectionHeader}
      </Heading>
      {sectionContent}
    </Box>
  );
};
