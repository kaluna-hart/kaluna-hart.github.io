import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { TwitterIconButton } from '.';

export default {
  title: 'molecules/TwitterIconButton',
  component: TwitterIconButton,
} as Meta;

export const Default: React.FC = () => <TwitterIconButton />;
