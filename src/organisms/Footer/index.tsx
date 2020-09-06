import React from 'react';
import styled from '@emotion/styled';
import CopyrightDiv from '../../molecules/CopyrightDiv';

export type TFooterProps = {
  width: string;
  height: string;
  margin: string;
  className?: string;
};

const StyledDiv = styled.div((props: TFooterProps) => ({
  width: props.width,
  height: props.height,
  margin: props.margin,
  position: 'relative',
}));

export const Footer: React.FC<TFooterProps> = (props) => {
  return (
    <StyledDiv {...props}>
      <CopyrightDiv />
    </StyledDiv>
  );
};

export default Footer;
