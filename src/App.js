import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Favorites, MainPage } from './pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/favorites" exact component={Favorites} />
      <Route render={() => <div>Not found</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
