import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../Header';
import './app.scss';
import { Home } from '../../routes/Home';
import { Footer } from '../Footer';

export const App = () => {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
