import React from 'react';
import Head from 'next/head';
import IndexTemplate from '../templates/IndexTemplate';

export const Index: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Kaluna &bull; Hartのポートフォリオ | なんでもself-makingエンジニア</title>
      </Head>
      <IndexTemplate />
    </React.Fragment>
  );
};

export default Index;
