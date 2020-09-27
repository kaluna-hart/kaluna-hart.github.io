import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NameDiv, TNameDivProps } from '.';

const Template: Story<TNameDivProps> = (args) => <NameDiv {...args} />;

export default {
  title: 'atoms/NameDiv',
  component: NameDiv,
} as Meta;

export const Test = Template.bind({});
Test.args = { name: 'Test' };
