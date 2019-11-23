import React from 'react';
import styled from '@emotion/styled';

const StyledSpan = styled.span`
  font-family: 'Dancing Script';
`;

export type INameSpanProps = {
  name: string;
};

export default function NameSpan(props: INameSpanProps) {
  return <StyledSpan>{props.name}</StyledSpan>;
}

// @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
