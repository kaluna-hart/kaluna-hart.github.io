import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import NameBox from '../../atoms/NameBox';

const nameList = ['faluna', 'kaluna', 'Hart'];

export const NameList: React.FC<FlexProps> = ({ ...props }) => {
  return (
    <Flex justifyContent={['space-around']} {...props}>
      {nameList.map((value) => (
        <NameBox name={value} key={value} w={['auto']} h={['auto']} />
      ))}
    </Flex>
  );
};

export default NameList;
