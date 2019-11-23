import React from 'react';
import Footer from '../Footer';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const test = storiesOf('Organisms|Footer', module);
test
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Footer', () => <Footer width="50px" height="80px" margin="auto" />);
