import React from 'react';
import styled from '@emotion/styled';
import PostHeader from '../../organisms/PostHeader';
import FloatingMenu from '../../organisms/FloatingMenu';

const StyledFloatingMenu = styled(FloatingMenu)`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 5px;
`;

export type TPostTemplateProps = {
  Article: React.ElementType;
};

export const PostTemplate: React.FCX<TPostTemplateProps> = (props) => {
  const { Article } = props;
  return (
    <React.Fragment>
      <PostHeader />
      <Article />
      <StyledFloatingMenu />
    </React.Fragment>
  );
};

export default PostTemplate;
