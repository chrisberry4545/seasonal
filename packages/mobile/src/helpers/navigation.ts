import { ROUTES } from '../const';
import {
  NavigationContainerRef, CommonActions, DrawerActions
} from '@react-navigation/native';

import * as React from 'react';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export const navigate = (
  name: string,
  params?: object
) => {
  if (navigationRef && navigationRef.current) {
    navigationRef.current.dispatch(
      CommonActions.navigate({
        name,
        params
      })
    );
  }
};

export const navigateBackOne = () => {
  if (
    navigationRef
    && navigationRef.current
    && navigationRef.current.canGoBack()
  ) {
    navigationRef.current.dispatch(
      CommonActions.goBack()
    );
  }
};

export const openDrawer = () => {
  if (navigationRef && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef && navigationRef.current) {
    navigationRef.current.dispatch(DrawerActions.closeDrawer());
  }
};

export const getCurrentNavigatorRoute = () => {
  if (navigationRef && navigationRef.current) {
    const rootState = navigationRef.current.getRootState();
    const routeIndex = rootState.index;
    return rootState.routes[routeIndex];
  }
  return null;
};

const isCurrentRoute = (route: ROUTES) => {
  const currentRoute = getCurrentNavigatorRoute();
  if (currentRoute) {
    return currentRoute.name === route;
  }
  return false;
};

export const getIsCurrentRouteAllSeasons = () => (
  isCurrentRoute(ROUTES.ALL_SEASONS)
);

export const getIsCurrentRouteSeasonDetails = () => (
  isCurrentRoute(ROUTES.SEASON_DETAILS)
);

export const getIsCurrentRouteAboutUs = () => (
  isCurrentRoute(ROUTES.ABOUT_US)
);

export const getIsCurrentRouteSettings = () => (
  isCurrentRoute(ROUTES.SETTINGS)
);
