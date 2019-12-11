import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { FavoritesPages, MainPage, NotFound } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/favorites" exact component={FavoritesPages} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
