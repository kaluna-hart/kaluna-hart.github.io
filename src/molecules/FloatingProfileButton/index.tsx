import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import FloatingButton from '../../atoms/FloatingButton';

const StyledFontAweSomeIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  font-size: 1em;
`;

export const FloatingProfileButton: React.FCX = (props) => {
  return (
    <FloatingButton to="/profile" {...props}>
      <StyledFontAweSomeIcon icon={faIdCard} />
    </FloatingButton>
  );
};

export default FloatingProfileButton;
