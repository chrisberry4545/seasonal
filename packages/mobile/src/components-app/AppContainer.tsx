import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {
  AboutUsPage,
  AllSeasonsPage,
  BadgePage,
  FoodDetailsPage,
  SeasonDetailsPage,
  SettingsPage
} from '../components-pages';
import { ROUTES } from '../const';
import { navigationRef } from '../helpers';
import { SideMenuConnecter } from '../components-main';

export const AppContainer: FC<{}> = () => {
  const Drawer = createDrawerNavigator();
  return <NavigationContainer ref={navigationRef}>
    <Drawer.Navigator initialRouteName={ROUTES.SEASON_DETAILS} drawerContent={() => <SideMenuConnecter />} >
      <Drawer.Screen name={ROUTES.SEASON_DETAILS} component={SeasonDetailsPage} />
      <Drawer.Screen name={ROUTES.ABOUT_US} component={AboutUsPage} />
      <Drawer.Screen name={ROUTES.ALL_SEASONS} component={AllSeasonsPage} />
      <Drawer.Screen name={ROUTES.BADGE_DETAILS} component={BadgePage} />
      <Drawer.Screen name={ROUTES.FOOD_DETAILS} component={FoodDetailsPage} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsPage} />
    </Drawer.Navigator>
  </NavigationContainer>;
};
