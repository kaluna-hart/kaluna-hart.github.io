import React from 'react';
import { Text } from 'sancho';

export const ProfileHeader: React.FCX = (props) => (
  <header {...props}>
    <Text variant="display1" wrap={false}>
      プロフィール
    </Text>
  </header>
);

export default ProfileHeader;
