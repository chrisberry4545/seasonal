import React, { FC } from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  NavigationScreenRouteConfig
} from 'react-navigation';
import {
  AboutUsPage,
  AllSeasonsPage,
  FoodDetailsPage,
  SeasonDetailsPage,
  SettingsPage
} from '../components-pages';
import {
  setTopLevelNavigator
} from '../services';
import { ROUTES } from '../const';
import { SideMenuConnecter } from '../components-main';

export const AppContainer: FC<{}> = () => {
  const navigation: { [key: string]: NavigationScreenRouteConfig} = {
    [ROUTES.SEASON_DETAILS]: SeasonDetailsPage,
    [ROUTES.ABOUT_US]: AboutUsPage,
    [ROUTES.ALL_SEASONS]: AllSeasonsPage,
    [ROUTES.FOOD_DETAILS]: FoodDetailsPage,
    [ROUTES.SETTINGS]: SettingsPage
  };
  const DrawerNavigator = createDrawerNavigator(navigation, {
    contentComponent: () => <SideMenuConnecter />,
    initialRouteName: ROUTES.SEASON_DETAILS
  });
  const CreatedAppContainer = createAppContainer(DrawerNavigator);
  return <CreatedAppContainer ref={
    (navigatorRef) => setTopLevelNavigator(navigatorRef)
  }/>;
};
