import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  font-family: 'Roboto';
  display: inline-block;
  font-size: 0.5rem;
  text-align: center;
  top: 100%;
`;

export default function CopyrightDiv() {
  return (
    <StyledDiv>
      Copyright © 2019 Hayato Kumazawa. All rights reserved.
    </StyledDiv>
  );
}
// @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
