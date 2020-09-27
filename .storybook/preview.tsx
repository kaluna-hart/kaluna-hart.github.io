import { addDecorator } from '@storybook/react';
// import { withThemeProvider } from 'storybook-addon-theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../src/utils/theme';

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
