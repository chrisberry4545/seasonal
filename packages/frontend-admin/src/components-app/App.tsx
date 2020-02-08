import React, { FC } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  ViewRecipesPage
} from '../components-pages';

export const App: FC<{}> = () => (
  <HashRouter>
    <div>
      <Route exact path='/'>
        <LoginPage />
      </Route>
      <Route exact path='/home'>
        <HomePage />
      </Route>
      <Route exact path='/recipes'>
        <ViewRecipesPage />
      </Route>
    </div>
  </HashRouter>
);
