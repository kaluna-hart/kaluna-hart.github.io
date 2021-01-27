import React from 'react';
import PostHeader from '../../organisms/PostHeader';
import Footer from '../../organisms/Footer';
import FloatingBlogButton from '../../molecules/FloatingBlogButton';

export type TPostTemplateProps = {
  Article: React.ElementType;
};

export const PostTemplate: React.FCX<TPostTemplateProps> = ({ Article }) => {
  return (
    <React.Fragment>
      <FloatingBlogButton
        sx={{
          position: 'fixed',
          top: ['0.2em', '0em', '0.4em', '0.1em'],
          right: ['0.5em', '0.3em', '0.4em', '0.6em'],
          zIndex: 100,
          width: ['2em'],
          height: ['2em'],
          lineHeight: ['2em'],
          fontSize: ['2.0em', '3em', null, '4em'],
        }}
      />
      <PostHeader />
      <Article />
      <br />
      <Footer sx={{ width: '100%', height: '10%', mx: 'auto' }} />
    </React.Fragment>
  );
};

export default PostTemplate;
