import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0ffff;
  border-radius: 50%;
  transition: 0.3s;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  width: 56px;
  height: 56px;
  :hover {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;

export type TFloatingButtonProps = {
  to: string;
};

export const FloatingButton: React.FCX<TFloatingButtonProps> = (props) => {
  const { children, to, className } = props;
  return (
    <Link href={to}>
      <StyledDiv className={className}>{children}</StyledDiv>
    </Link>
  );
};

export default FloatingButton;
