/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

export type CategoryBoxProps = {
  categoryName: string;
};

export const CategoryBox: React.FCX<CategoryBoxProps> = ({ categoryName, ...props }) => (
  <Box {...props} sx={{ variant: 'styles.blog.categoryBox' }}>
    {categoryName}
  </Box>
);

export default CategoryBox;
