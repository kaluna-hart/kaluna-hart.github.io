/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import FloatingButton from '../../atoms/FloatingButton';

export const FloatingBlogButton: React.FCX = (props) => (
  <FloatingButton to="/blog/1" {...props}>
    <FontAwesomeIcon icon={faNewspaper} sx={{ fontSize: 'inherit' }} />
  </FloatingButton>
);

export default FloatingBlogButton;
