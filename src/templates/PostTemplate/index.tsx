import React from 'react';
import PostHeader from '../../organisms/PostHeader';

export type TPostTemplateProps = {
  Article: React.ElementType;
};

export const PostTemplate: React.FCX<TPostTemplateProps> = () => {
  return (
    <React.Fragment>
      <PostHeader />
    </React.Fragment>
  );
};

export default PostTemplate;
