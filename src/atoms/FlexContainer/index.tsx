import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
`;

export const FlexContainer: React.FCX = (props) => {
  const { children, ...args } = props;
  return <StyledDiv {...args}>{children}</StyledDiv>;
};

export default FlexContainer;
