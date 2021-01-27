import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export const Copyright: React.FC<TextProps> = (props) => {
  return (
    <Text fontSize={['0.75rem']} whiteSpace={['nowrap']} textAlign="center" variant="footer" {...props}>
      Copyright © 2019 Hayato Kumazawa. All rights reserved.
    </Text>
  );
};

export default Copyright;
