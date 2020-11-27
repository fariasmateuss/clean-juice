import React from 'react';

import Header from '../../components/Header';
import Context from '../../components/Context';
import Juice from '../../components/Juice';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Context />
      <Juice />
    </>
  );
};

export default Home;
