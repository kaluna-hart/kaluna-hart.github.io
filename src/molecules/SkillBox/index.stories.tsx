import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Rust from '@svg/rust.svg';
import Typescript from '@svg/typescript.svg';
import { SkillBox, TSkillBoxProps } from '.';

export default {
  title: 'molecules/SkillBox',
  component: SkillBox,
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story<TSkillBoxProps> = (args) => <SkillBox {...args} />;

const rustData: TSkillBoxProps = {
  name: 'rust',
  Icon: Rust,
};

const typescriptData: TSkillBoxProps = {
  name: 'typescript',
  Icon: Typescript,
};

export const RustSkillBox = Template.bind({});
RustSkillBox.args = rustData;

export const TypescriptSkillBox = Template.bind({});
TypescriptSkillBox.args = typescriptData;
