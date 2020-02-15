import React, { FC } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {
  HomePage,
  LoginPage,
  ViewCountriesPage,
  ViewRecipesPage,
  EditRecipePage,
  EditCountryPage,
  EditFoodPage,
  ViewFoodPage,
  ViewRegionsPage,
  EditRegionPage,
  ViewUsersPage,
  EditUserPage,
  CreateFoodPage
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
      <Route exact path={`/${ROUTES.COUNTRY}/${ROUTES.EDIT}/:id`}
        children={<EditCountryPage />} />

      <Route exact path={`/${ROUTES.FOOD}`}>
        <ViewFoodPage />
      </Route>
      <Route exact path={`/${ROUTES.FOOD}/${ROUTES.EDIT}/:id`}
        children={<EditFoodPage />} />
      <Route exact path={`/${ROUTES.FOOD}/${ROUTES.CREATE}`}
        children={<CreateFoodPage />} />

      <Route exact path={`/${ROUTES.RECIPE}`}>
        <ViewRecipesPage />
      </Route>
      <Route exact path={`/${ROUTES.RECIPE}/${ROUTES.EDIT}/:id`}
        children={<EditRecipePage />} />

      <Route exact path={`/${ROUTES.REGION}`}>
        <ViewRegionsPage />
      </Route>
      <Route exact path={`/${ROUTES.REGION}/${ROUTES.EDIT}/:id`}
        children={<EditRegionPage />} />

      <Route exact path={`/${ROUTES.USER}`}>
        <ViewUsersPage />
      </Route>
      <Route exact path={`/${ROUTES.USER}/${ROUTES.EDIT}/:id`}
        children={<EditUserPage />} />
    </div>
  </HashRouter>
);
