import React from 'react';

import './App.css';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
