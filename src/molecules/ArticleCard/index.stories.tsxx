import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleCard, { ArticleCardProps } from '.';

export default {
  title: 'molecules/ArticleCard',
  component: ArticleCard,
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story<ArticleCardProps> = (args) => <ArticleCard {...args} />;
const rustData: ArticleCardProps = {
  title: 'rustの記事',
  IconName: 'rust.svg',
  releaseDate: {
    year: 2020,
    month: 10,
    day: 4,
  },
  pid: 'rust-data',
};

const typescriptData: ArticleCardProps = {
  title: 'typescriptの記事',
  IconName: 'typescript.svg',
  releaseDate: {
    year: 2020,
    month: 10,
    day: 2,
  },
  updateDate: {
    year: 2020,
    month: 10,
    day: 3,
  },
  pid: 'typescript-data',
};

export const RustArticleCard = Template.bind({});
RustArticleCard.args = rustData;

export const TypescriptArticleCard = Template.bind({});
TypescriptArticleCard.args = typescriptData;
