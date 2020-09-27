/** @jsx jsx */
import React from 'react';
import { jsx, Flex } from 'theme-ui';
import NameBox from '../../atoms/NameBox';

const nameList = ['faluna', 'kaluna', 'Hart'];

export const NameList: React.FC = () => {
  return (
    <Flex sx={{ justifyContent: 'space-around' }}>
      {nameList.map((value) => (
        <NameBox name={value} key={value} sx={{ width: 'auto', height: 'auto' }} />
      ))}
    </Flex>
  );
};

export default NameList;
