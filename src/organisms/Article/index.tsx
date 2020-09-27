import React from 'react';
import { Layer } from 'sancho';
import Title from '../../atoms/Title';
import { TMeta } from '../../../articles/test.mdx';

export type TArticleProps = {
  meta: TMeta;
};

export const Article: React.FCX<TArticleProps> = (props) => {
  const { meta, children, ...others } = props;
  return (
    <Layer {...others}>
      <Title
        title={meta.title}
        categories={meta.categories}
        lastUpdated={meta.lastUpdated}
        firstPosted={meta.firstPosted}
      />
      {children}
    </Layer>
  );
};

export default Article;
