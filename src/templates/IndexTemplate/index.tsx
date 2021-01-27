import React from 'react';
import { Box } from '@chakra-ui/react';
import LogoIcon from '@svg/logo.svg';
import IconGridList from '../../organisms/IconGridList';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import NameList from '../../organisms/NameList';

export const IndexTemplate: React.FC = () => {
  return (
    <Box h={['100%', 'auto']}>
      <Header width={['100vw']} m={['auto']} />
      <Box as="main">
        <Box
          width={['95%', null, '600px', '700px', '750px']}
          borderRadius="50px"
          boxShadow="inset 8px 8px 25px #b3b6b8, inset -8px -8px 25px #ffffff"
          m={['auto']}
          my={[null, null, '1rem']}
        >
          <LogoIcon />
        </Box>
        <NameList mx={['auto']} my={['1rem']} />
        <IconGridList mx={['auto']} my={['1rem']} w={['100%']} />
      </Box>
      <Footer w={['100%']} m={['auto']} position={['sticky', 'unset']} bottom={['0', null]} />
    </Box>
  );
};

export default IndexTemplate;
