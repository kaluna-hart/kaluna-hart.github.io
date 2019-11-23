import React from 'react';
import GitHubIconButton from '../GitHubIconButton';
import styled from '@emotion/styled';

import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const StyledGitHubIconButton = styled(GitHubIconButton)`
  font-size: 40px;
`;

export const test = storiesOf('Molecules|GitHubIconButton', module);
test
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('GitHubIconButton', () => <StyledGitHubIconButton />);
