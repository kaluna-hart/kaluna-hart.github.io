/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import FloatingButton from '../../atoms/FloatingButton';

export const FloatingHomeButton: React.FCX = (props) => {
  return (
    <FloatingButton to="/" {...props}>
      <FontAwesomeIcon icon={faHome} sx={{ fontSize: 'inherit' }} />
    </FloatingButton>
  );
};

export default FloatingHomeButton;
