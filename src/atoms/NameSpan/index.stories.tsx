import React from 'react';
import NameSpan from '../NameSpan';
import styled from '@emotion/styled';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const StyledNameSpan = styled(NameSpan)`
  font-size: 30px;
`;

export const test = storiesOf('Atoms|NameSpan', module);
test
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('NameSpan', () => <StyledNameSpan name="Test Name Span" />);
