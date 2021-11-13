import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import RecruitmentPostProvider from './context/RecruitmentPostContext';
import GlobalStyle from './style/GlobalStyle';
import App from './App';
import { theme } from './style/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <RecruitmentPostProvider>
        <GlobalStyle />
        <App />
      </RecruitmentPostProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
