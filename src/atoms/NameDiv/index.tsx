import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div(
  {
    fontFamily: 'Cardo',
    margin: '0 auto',
    padding: '0 auto'
  },
  (props: overrideType) => ({
    margin: props.margin,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
  })
);

export type overrideType = {
  fontSize: string;
  height: string;
  width?: string;
  margin?: string;
  fontFamily?: string;
};

export type INameDivProps = overrideType & {
  name: string;
  className?: string;
};

export default function NameDiv(props: INameDivProps) {
  const { name, ...other } = props;
  return <StyledDiv {...other}>{name}</StyledDiv>;
}
