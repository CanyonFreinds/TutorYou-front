import React from 'react';
import { ThemeProvider } from '@mui/material';
import GlobalStyle from '../src/style/GlobalStyle';
import { theme } from '../src/style/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle />
    </ThemeProvider>
  ),
];
