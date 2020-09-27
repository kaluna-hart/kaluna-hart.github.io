/** @jsx jsx */
import React from 'react';
import { jsx, Flex } from 'theme-ui';
import NameBox from '../../atoms/NameBox';

const nameList = ['faluna', 'kaluna', 'Hart'];

const overrideNameDivStyle = {
  fontSize: '90%',
  width: 'auto',
  height: 'auto',
  margin: '0',
  fontFamily: 'Dancing Script',
};

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
