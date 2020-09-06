import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { NameSpan, INameSpanProps } from '.';

const Template: Story<INameSpanProps> = (args) => <NameSpan {...args} />;

export default {
  title: 'atoms/NameSpan',
  component: NameSpan,
} as Meta;

export const Test = Template.bind({});
Test.args = { name: 'Test' };
