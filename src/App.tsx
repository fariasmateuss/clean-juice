import React from 'react';

import Header from './components/Header';
import Context from './components/Context';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Context />
    </div>
  );
};

export default App;
