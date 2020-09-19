import React from 'react';
import PostHeader from '../../organisms/PostHeader';
import Article from '../../organisms/Article';
import FloatingBlogButton from '';
import { TMeta } from '../../../articles/test.mdx';

export type TPostTemplateProps = {
  Content: React.ElementType;
  meta: TMeta;
};

export const PostTemplate: React.FC<TPostTemplateProps> = (props) => {
  const { Content, meta } = props;
  return (
    <React.Fragment>
      <PostHeader />
      <Article Content={Content} meta={meta} />
    </React.Fragment>
  );
};

export default PostTemplate;
