import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export type TNameBoxProps = {
  name: string;
};

export const NameBox: React.FC<TNameBoxProps & TextProps> = ({ name, ...props }) => {
  return (
    <Text fontFamily="Dancing Script" fontSize={['1.5rem', null, '2rem', null, '2.5rem']} {...props}>
      {name}
    </Text>
  );
};

export default NameBox;
