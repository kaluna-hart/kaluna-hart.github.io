/** @jsx jsx */
import React from 'react';
import { jsx, Text } from 'theme-ui';

export const Copyright: React.FC = () => {
  return (
    <Text variant="footer" sx={{ fontSize: [0], whiteSpace: 'nowrap', textAlign: 'center' }}>
      Copyright © 2019 Hayato Kumazawa. All rights reserved.
    </Text>
  );
};

export default Copyright;
// @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
