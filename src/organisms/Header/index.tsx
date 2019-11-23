import React from 'react';
import NameDiv from '../../atoms/NameDiv';
import JPNameDiv from '../../molecules/JPNameDiv';
import styled from '@emotion/styled';

const StyledDiv = styled.div((props: IHeaderProps) => ({
  height: props.height,
  width: props.width,
  margin: props.margin,
  display: 'inline-block',
  textAlign: 'center'
}));

const overrideNameDivStyle = {
  fontSize: '3rem',
  height: '60%'
};

const overrideJPNameDivStyle = {
  fontSize: '1.5rem',
  height: '40%'
};

export type IHeaderProps = {
  height: string;
  width: string;
  margin: string;
  className?: string;
};

export default function Header(props: IHeaderProps) {
  return (
    <StyledDiv {...props}>
      <NameDiv name="Portfolio" {...overrideNameDivStyle} />
      <JPNameDiv {...overrideJPNameDivStyle} />
    </StyledDiv>
  );
}
