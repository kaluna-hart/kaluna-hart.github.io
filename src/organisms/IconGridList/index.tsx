import React from 'react';
import { Flex, FlexProps } from '@chakra-ui/react';
import GitHubIconButton from '../../molecules/GitHubIconButton';
import TwitterIconButton from '../../molecules/TwitterIconButton';
import ProfileButton from '../../molecules/ProfileButton';

type IconList = typeof GitHubIconButton[];

const iconList: IconList = [GitHubIconButton, ProfileButton, TwitterIconButton];

export const IconGridList: React.FC<FlexProps> = ({ ...props }) => {
  return (
    <Flex justifyContent="space-around" {...props}>
      {iconList.map((Value) => (
        <Value />
      ))}
    </Flex>
  );
};

export default IconGridList;
