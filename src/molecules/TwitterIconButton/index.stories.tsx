import React from 'react';
import TwitterIconButton from '../TwitterIconButton';
import styled from '@emotion/styled';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const StyledTwitterIconButton = styled(TwitterIconButton)`
  font-size: 40px;
`;

export const test = storiesOf('Molecules|TwitterIconButton', module);
test
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('TwitterIconButton', () => <StyledTwitterIconButton />);
