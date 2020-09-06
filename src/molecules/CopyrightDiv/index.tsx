import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  font-family: 'Roboto';
  display: inline-block;
  font-size: 0.5rem;
  text-align: center;
  top: 100%;
`;

export const CopyrightDiv: React.FC = () => {
  return <StyledDiv>Copyright © 2019 Hayato Kumazawa. All rights reserved.</StyledDiv>;
};

export default CopyrightDiv;
// @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
