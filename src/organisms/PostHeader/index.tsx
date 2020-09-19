import React from 'react';
import styled from '@emotion/styled';
import { Text } from 'sancho';

const StyledText = styled(Text)`
  fontfamily: 'Cardo';
`;

export const PostHeader: React.FCX = () => (
  <header>
    <StyledText variant="display1" wrap={false}>
      Kaluna#8228Hart
    </StyledText>
  </header>
);

export default PostHeader;
