import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Context from './components/Context';
import Juice from './components/Juice';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Context />
      <Juice />
      <GlobalStyle />
    </div>
  );
};

export default App;
