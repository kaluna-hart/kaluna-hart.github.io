import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import ProfileHeader from '.';

export default {
  title: 'organisms/ProfileHeader',
  component: ProfileHeader,
} as Meta;

export const Default: React.FC = () => <ProfileHeader />;
