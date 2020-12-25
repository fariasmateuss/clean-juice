import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { defaultTheme } from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
