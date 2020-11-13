import React from 'react';

import Header from './components/Header';
import Context from './components/Context';
import Juice from './components/Juice';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Context />
      <Juice />
    </div>
  );
};

export default App;
