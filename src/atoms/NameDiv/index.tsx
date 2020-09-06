import React from 'react';
import styled from '@emotion/styled';

export type overrideType = {
  fontSize: string;
  height: string;
  width?: string;
  margin?: string;
  fontFamily?: string;
};

const StyledDiv = styled.div(
  {
    fontFamily: 'Cardo',
    margin: '0 auto',
    padding: '0 auto',
  },
  (props: overrideType) => ({
    margin: props.margin,
    width: props.width,
    height: props.height,
    fontSize: props.fontSize,
    fontFamily: props.fontFamily,
  })
);

export type TNameDivProps = overrideType & {
  name: string;
  className?: string;
};

export const NameDiv: React.FC<TNameDivProps> = (props) => {
  const { name, className, ...other } = props;
  return (
    <StyledDiv className={className} {...other}>
      {name}
    </StyledDiv>
  );
};

export default NameDiv;
