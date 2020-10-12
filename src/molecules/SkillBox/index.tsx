/** @jsx jsx */
import React from 'react';
import { jsx, Text, Container } from 'theme-ui';

export type SkillBoxProps = {
  name: string;
  Icon: React.FCX;
};

export const SkillBox: React.FCX<SkillBoxProps> = ({ name, Icon }) => {
  return (
    <Container variant="skillBox">
      <Icon sx={{ height: '70%', width: 'auto', maxWidth: '100%', display: 'block', m: 'auto' }} />
      <Container sx={{ height: '20%', width: 'auto', textAlign: 'center' }}>
        <Text sx={{ fontSize: ['0.7em', '0.7em', '0.8em', '1.2em'] }}>{name}</Text>
      </Container>
    </Container>
  );
};

export default SkillBox;
