import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { FavoritesPages, MainPage, NotFound } from './pages';

const App = () => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/favorites" exact component={FavoritesPages} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default App;
