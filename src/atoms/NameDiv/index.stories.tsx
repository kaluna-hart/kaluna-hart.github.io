import React from 'react';
import NameDiv from '../NameDiv';
import styled from '@emotion/styled';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

export const test = storiesOf('Atoms|NameDiv', module);
test
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('Name', () => (
    <NameDiv name="Test Name Div" fontSize="20px" height="auto" />
  ));
