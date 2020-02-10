import React, { FC } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  ViewCountriesPage,
  ViewRecipesPage,
  EditRecipePage,
  EditCountryPage
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
      <Route exact path='/country'>
        <ViewCountriesPage />
      </Route>
      <Route exact path='/country/:id' children={<EditCountryPage />} />
      <Route exact path='/recipes'>
        <ViewRecipesPage />
      </Route>
      <Route exact path='/recipes/:id' children={<EditRecipePage />} />
    </div>
  </HashRouter>
);
