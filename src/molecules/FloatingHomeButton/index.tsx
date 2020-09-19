import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import FloatingButton from '../../atoms/FloatingButton';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  vertical-align: ;
  font-size: 1em;
`;

export const FloatingHomeButton: React.FCX = (props) => {
  return (
    <FloatingButton to="/index" {...props}>
      <StyledFontAwesomeIcon icon={faHome} />
    </FloatingButton>
  );
};

export default FloatingHomeButton;
