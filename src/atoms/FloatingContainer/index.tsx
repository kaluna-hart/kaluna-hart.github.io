import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  transition: 0.3s;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  :hover {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;

export const FloatingContainer: React.FCX = (props) => {
  const { children, ...others } = props;
  return <StyledDiv {...others}>{children}</StyledDiv>;
};

export default FloatingContainer;
