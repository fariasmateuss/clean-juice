import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact to="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
