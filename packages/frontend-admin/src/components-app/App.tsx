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
import { ROUTES } from '../config';

export const App: FC<{}> = () => (
  <HashRouter>
    <div>
      <Route exact path={`/${ROUTES.LOGIN}`}>
        <LoginPage />
      </Route>
      <Route exact path={`/${ROUTES.HOME}`}>
        <HomePage />
      </Route>
      <Route exact path={`/${ROUTES.COUNTRY}`}>
        <ViewCountriesPage />
      </Route>
      <Route exact path={`/${ROUTES.COUNTRY}/:id`} children={<EditCountryPage />} />
      <Route exact path={`/${ROUTES.RECIPE}`}>
        <ViewRecipesPage />
      </Route>
      <Route exact path={`/${ROUTES.RECIPE}/:id`} children={<EditRecipePage />} />
    </div>
  </HashRouter>
);
