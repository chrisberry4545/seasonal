import React, { FC } from 'react';

import {
  IntroPage,
  FoodTablePage,
  FoodDetailsPage,
  AllSeasonsPage,
  SettingsPage
} from '../components-pages';
import './App.scss';

import { Provider } from 'react-redux';
import { store, storeHistory } from '../store/reducers';

import { Route, Switch } from 'react-router';

import {
  FOOD_TABLE_URL,
  LANDING_URL,
  FOOD_DETAILS_URL,
  ALL_SEASONS_URL,
  SETTINGS_URL
} from '../const';

import { ConnectedRouter } from 'connected-react-router';
import { GlobalModals } from '../components-main';

export const App: FC<{}> = () => (
  <Provider store={store}>
    <ConnectedRouter history={storeHistory}>
      <div className='c-app'>
        <Switch>
          <Route path={LANDING_URL} component={IntroPage} exact />
          <Route path={FOOD_TABLE_URL} component={FoodTablePage} />
          <Route path={`${FOOD_DETAILS_URL}/:id`} component={FoodDetailsPage} />
          <Route path={ALL_SEASONS_URL} component={AllSeasonsPage} />
          <Route path={SETTINGS_URL} component={SettingsPage} />
        </Switch>
      </div>
    </ConnectedRouter>
    <GlobalModals />
  </Provider>
);
