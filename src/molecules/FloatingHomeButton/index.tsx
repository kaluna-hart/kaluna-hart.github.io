import React from 'react';
import { BoxProps } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import FloatingButton from '../../atoms/FloatingButton';

export const FloatingHomeButton: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <FloatingButton to="/" {...props}>
      <FontAwesomeIcon icon={faHome} />
    </FloatingButton>
  );
};

export default FloatingHomeButton;
