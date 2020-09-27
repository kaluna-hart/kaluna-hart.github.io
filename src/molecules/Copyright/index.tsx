/** @jsx jsx */
import React from 'react';
import { jsx, Text } from 'theme-ui';

const StyledDiv = `
  font-family: 'Roboto';
  display: inline-block;
  font-size: 0.5rem;
  text-align: center;
  top: 100%;
`;

export const Copyright: React.FC = () => {
  return (
    <Text variant="footer" sx={{ fontSize: [0], whiteSpace: 'nowrap', textAlign: 'center' }}>
      Copyright © 2019 Hayato Kumazawa. All rights reserved.
    </Text>
  );
};

export default Copyright;
// @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
