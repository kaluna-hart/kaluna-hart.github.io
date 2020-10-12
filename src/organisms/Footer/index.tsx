/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Copyright from '../../molecules/Copyright';

export const Footer: React.FCX = (props) => {
  return (
    <footer {...props}>
      <Copyright />
    </footer>
  );
};

export default Footer;
