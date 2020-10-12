/** @jsx jsx */
import React from 'react';
import { jsx, Flex } from 'theme-ui';
import CategoryBox from '../CategoryBox';

export type CategoryListProps = {
  tabCategories: string[];
};

export const CategoryList: React.FCX<CategoryListProps> = ({ tabCategories, ...props }) => (
  <Flex {...props} sx={{ variant: 'styles.blog.categoryList' }}>
    {tabCategories.map((name) => (
      <CategoryBox categoryName={name} key={name} />
    ))}
  </Flex>
);

export default CategoryList;
