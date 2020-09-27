import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { GitHubIconButton } from '.';

export const Primary: React.FC = () => <GitHubIconButton />;

export default {
  title: 'molecules/GitHubIconButton',
  component: GitHubIconButton,
} as Meta;
