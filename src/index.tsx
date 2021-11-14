import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import RecruitmentPostProvider from './context/RecruitmentPostContext';
import UserProvider from './context/UserContext';
import GlobalStyle from './style/GlobalStyle';
import ToastContainer from './component/Toast';
import App from './App';
import { theme } from './style/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>
        <RecruitmentPostProvider>
          <GlobalStyle />
          <ToastContainer />
          <App />
        </RecruitmentPostProvider>
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
