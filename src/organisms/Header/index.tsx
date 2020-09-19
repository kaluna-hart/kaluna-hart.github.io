import React from 'react';
import styled from '@emotion/styled';
import NameDiv from '../../atoms/NameDiv';
import JPNameDiv from '../../molecules/JPNameDiv';

export type THeaderProps = {
  height: string;
  width: string;
  margin: string;
  className?: string;
};

const StyledHeader = styled.header((props: THeaderProps) => ({
  height: props.height,
  width: props.width,
  margin: props.margin,
  display: 'inline-block',
  textAlign: 'center',
}));

const overrideNameDivStyle = {
  fontSize: '2.8rem',
  height: '60%',
};

const overrideJPNameDivStyle = {
  fontSize: '1.5rem',
  height: '30%',
};

export const Header: React.FC<THeaderProps> = (props) => {
  return (
    <StyledHeader {...props}>
      <NameDiv name="Portfolio" {...overrideNameDivStyle} />
      <JPNameDiv {...overrideJPNameDivStyle} />
    </StyledHeader>
  );
};

export default Header;
