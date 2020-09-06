import React from 'react';
import { Text } from 'sancho';

export const ProfileHeader: React.FCX = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <Text variant="display1" wrap={false}>
        プロフィール
      </Text>
    </div>
  );
};

export default ProfileHeader;
