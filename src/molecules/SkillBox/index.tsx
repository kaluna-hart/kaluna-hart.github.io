import React from 'react';
import styled from '@emotion/styled';
import { Text } from 'sancho';
import Container from '../../atoms/Container';

export type TSkillBoxProps = {
  name: string;
  Icon: React.FCX;
};

const TextContainer = styled.div`
  height: 20%;
  width: auto;
  max-width: 1.2;
  text-align: center;
  font-size: 1em;
`;

const StyledContainer = styled(Container)`
  text-align: center;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);
  background-color: #f0ffff;
`;

const StyledText = styled(Text)`
  font-size: 1em;
`;

const IconContainer = styled.div`
  height: 80%;
  width: auto;
`;

export const SkillBox: React.FCX<TSkillBoxProps> = (props) => {
  const { name, Icon, className } = props;
  const StyledIcon = styled(Icon)`
    height: 100%;
    width: auto;
  `;

  return (
    <StyledContainer className={className}>
      <IconContainer>
        <StyledIcon />
      </IconContainer>
      <TextContainer>
        <StyledText>{name}</StyledText>
      </TextContainer>
    </StyledContainer>
  );
};

export default SkillBox;
