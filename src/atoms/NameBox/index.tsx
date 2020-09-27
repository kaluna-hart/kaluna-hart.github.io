/** @jsx jsx */
import { jsx, Text } from 'theme-ui';
import React from 'react';

export type TNameBoxProps = {
  name: string;
};

export const NameBox: React.FC<TNameBoxProps> = ({ name }) => {
  return (
    <Text variant="codeName" as="div">
      {name}
    </Text>
  );
};

export default NameBox;
