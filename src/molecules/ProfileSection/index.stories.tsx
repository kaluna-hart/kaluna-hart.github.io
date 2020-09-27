import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ProfileSection, TProfileSectionProps } from '.';
import aboutMeData from './data/about-me';
import currentData from './data/current';
import historyData from './data/history';
import skillData from './data/skill';

export default {
  title: 'molecules/ProfileSection',
  component: ProfileSection,
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story<TProfileSectionProps> = (args) => <ProfileSection {...args} />;
const TextContent: React.FCX = () => {
  return (
    <div>
      {`
これはコンテンツがテキストのみの場合のテストです．
今正しく改行できているでしょうか？
次は計算式が正しく表示できているでしょうか？15が表示されていれば正しく表示されています．: ${10 + 5}`}
    </div>
  );
};

export const TextData: TProfileSectionProps = {
  sectionHeader: 'コンテンツがテキストの場合',
  sectionContent: <TextContent />,
};

export const TextContentSection = Template.bind({});
TextContentSection.args = TextData;

export const AboutMeSection = Template.bind({});
AboutMeSection.args = aboutMeData;

export const CurrentSection = Template.bind({});
CurrentSection.args = currentData;

export const HistorySection = Template.bind({});
HistorySection.args = historyData;

export const SkillSection = Template.bind({});
SkillSection.args = skillData;
