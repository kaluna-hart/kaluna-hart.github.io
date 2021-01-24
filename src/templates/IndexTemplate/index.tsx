/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Box } from '@chakra-ui/react';
import LogoIcon from '@svg/logo.svg';
import IconGridList from '../../organisms/IconGridList';
import Footer from '../../organisms/Footer';
import Header from '../../organisms/Header';
import NameList from '../../organisms/NameList';

export const IndexTemplate: React.FC = () => {
  return (
    <React.Fragment>
      <Header sx={{ width: '100%', height: '30%', m: 'auto' }} />
      <main>
        <Box
          width={[null, '600px', '700px']}
          borderRadius="50px"
          boxShadow="inset 8px 8px 25px #b3b6b8, inset -8px -8px 25px #ffffff"
          mx={['auto']}
        >
          <LogoIcon sx={{ width: [null, '600px', '700px'], display: 'block', mx: 'auto' }} />
        </Box>
        <NameList sx={{ height: '10%', m: 'auto' }} />
        <IconGridList sx={{ height: '30%', m: 'auto', width: '100%' }} />
      </main>
      <Footer sx={{ width: '100%', height: '10%', mx: 'auto' }} />
    </React.Fragment>
  );
};

export default IndexTemplate;
