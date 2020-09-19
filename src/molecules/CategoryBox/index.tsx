import React from 'react';
import styled from '@emotion/styled';
import { Text, Container } from 'sancho';

const StyledContainer = styled(Container)`
  background-color: gray;
  border-radius: 5%;
`;

export type TCategoryBoxProps = {
  categoryName: string;
};

export const CategoryBox: React.FCX<TCategoryBoxProps> = (props) => {
  const { categoryName, ...others } = props;
  return (
    <StyledContainer {...others}>
      <Text variant="subtitle">{categoryName}</Text>
    </StyledContainer>
  );
};

export default CategoryBox;
