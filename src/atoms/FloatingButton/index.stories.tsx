import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';
import { FloatingButton } from '.';

export default {
  title: 'atoms/FloatingButton',
  component: FloatingButton,
} as Meta;

const StyledFloatingButton = styled(FloatingButton)`
  width: 56px;
  height: 56px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  font-size: 25px;
`;

export const Home: React.FCX = () => {
  return (
    <StyledFloatingButton to=".">
      <StyledFontAwesomeIcon icon={faHome} />
    </StyledFloatingButton>
  );
};
