/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Story, Meta } from '@storybook/react/types-6-0';
import CategoryList, { CategoryListProps } from '.';

export default {
  title: 'molecules/CategoryList',
  component: CategoryList,
  excludeStories: /.*Data$/,
} as Meta;

const Template: Story<CategoryListProps> = (args) => <CategoryList {...args} sx={{ maxWidth: '20em', m: 'auto' }} />;

const CategoryData: CategoryListProps = {
  tabCategories: ['test1', 'テスト2', '練習', '本番', 'practice', 'production'],
};

export const CategoryListStory = Template.bind({});
CategoryListStory.args = CategoryData;
