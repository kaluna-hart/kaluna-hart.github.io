import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  font-family: 'Dancing Script';
`;

export type TNameSpanProps = {
  name: string;
};

export const NameSpan: React.FC<TNameSpanProps> = (props) => {
  const { name } = props;
  return <StyledSpan>{name}</StyledSpan>;
};

export default NameSpan;

// @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
