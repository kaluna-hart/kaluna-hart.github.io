import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconGridList, IIconGridListProps } from '.';

const Template: Story<IIconGridListProps> = (args) => <IconGridList {...args} />;

export default {
  title: 'organisms/IconGridList',
  component: IconGridList,
} as Meta;

export const Normal = Template.bind({});
Normal.args = { width: '10px', height: '5px', margin: '0' };
