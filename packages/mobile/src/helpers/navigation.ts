import { NavigationActions, NavigationParams } from 'react-navigation';
import { NavigationContainerComponent } from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import { ROUTES } from '../const';

let navigator: NavigationContainerComponent | null;

export const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent | null
) => {
  navigator = navigatorRef;
};

export const navigate = (
  routeName: string,
  params?: NavigationParams
) => {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        params,
        routeName
      })
    );
  }
};

export const navigateBackOne = () => {
  if (navigator) {
    navigator.dispatch(NavigationActions.back());
  }
};

export const openDrawer = () => {
  if (navigator) {
    navigator.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigator) {
    navigator.dispatch(DrawerActions.closeDrawer());
  }
};

export const getCurrentNavigatorRoute = () => {
  if (navigator) {
    const routeIndex = (navigator.state as any).nav.index;
    return (navigator.state as any).nav.routes[routeIndex];
  }
  return null;
};

const isCurrentRoute = (route: ROUTES) => {
  const currentRoute = getCurrentNavigatorRoute();
  if (currentRoute) {
    return currentRoute.routeName === route;
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
