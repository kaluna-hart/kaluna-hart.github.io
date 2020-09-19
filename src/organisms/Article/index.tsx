import React from 'react';
import { Layer } from 'sancho';
import Title from '../../atoms/Title';
import { TMeta } from '../../../articles/test.mdx';

export type TArticleProps = {
  meta: TMeta;
  Content: React.ElementType;
};

export const Article: React.FCX<TArticleProps> = (props) => {
  const { meta, Content, ...others } = props;
  return (
    <Layer {...others}>
      <Title
        title={meta.title}
        categories={meta.categories}
        lastUpdated={meta.lastUpdated}
        firstPosted={meta.firstPosted}
      />
      <Content />
    </Layer>
  );
};

export default Article;
