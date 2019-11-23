import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import IconGridList from '../IconGridList';

export const test = storiesOf('Organisms|IconGridList', module);
test
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('TwitterIconButton', () => <IconGridList width="80px" height="auto" margin="auto"/>);
