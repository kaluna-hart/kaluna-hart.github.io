/** @jsx jsx */
import React from 'react';
import { jsx, Heading } from 'theme-ui';

export const ProfileHeader: React.FC = () => (
  <header sx={{ variant: 'layout.pageHeader' }}>
    <Heading as="h1" sx={{ fontFamily: 'inherit' }}>
      Profile
    </Heading>
  </header>
);

export default ProfileHeader;
