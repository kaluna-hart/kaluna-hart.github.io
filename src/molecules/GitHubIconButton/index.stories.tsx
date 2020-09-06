import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { GitHubIconButton, IGitHubIconButtonProps } from '.';

export const Primary: React.FC<IGitHubIconButtonProps> = () => <GitHubIconButton />;

export default {
  title: 'molecules/GitHubIconButton',
  component: GitHubIconButton,
} as Meta;
