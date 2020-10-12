/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
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
        <LogoIcon sx={{ width: [null, '600px', '700px'], display: 'block', mx: 'auto' }} />
        <NameList sx={{ height: '10%', m: 'auto' }} />
        <IconGridList sx={{ height: '30%', m: 'auto', width: '100%' }} />
      </main>
      <Footer sx={{ width: '100%', height: '10%', mx: 'auto' }} />
    </React.Fragment>
  );
};

export default IndexTemplate;
