import React from 'react';
import styled from '@emotion/styled';
import CopyrightDiv from '../../molecules/CopyrightDiv';

const StyledDiv = styled.div((props: IFooterProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  position: 'relative'
}));

export type IFooterProps = {
  width: string;
  height: string;
  margin: string;
  className?: string;
};

export default function Footer(props: IFooterProps) {
  return (
    <StyledDiv {...props}>
      <CopyrightDiv />
    </StyledDiv>
  );
}
