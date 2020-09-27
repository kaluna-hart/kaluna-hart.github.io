/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import React from 'react';
import GitHubIconButton from '../../molecules/GitHubIconButton';
import TwitterIconButton from '../../molecules/TwitterIconButton';
import BlogButton from '../../molecules/BlogButton';
import ProfileButton from '../../molecules/ProfileButton';

type TIconList = typeof GitHubIconButton[];

const iconList: TIconList = [GitHubIconButton, ProfileButton, BlogButton, TwitterIconButton];

export const IconGridList: React.FC = () => {
  return (
    <Flex sx={{ m: 'auto', justifyContent: ['space-between', null, 'space-around'], alignItems: 'stretch', my: '8px' }}>
      {iconList.map((Value, index) => (
        <Value key={index} />
      ))}
    </Flex>
  );
};

export default IconGridList;
