import {
  setTopLevelNavigator,
  navigate,
  navigateBackOne,
  openDrawer,
  closeDrawer,
  getCurrentNavigatorRoute,
  getIsCurrentRouteAllSeasons,
  getIsCurrentRouteSeasonDetails,
  getIsCurrentRouteAboutUs,
  getIsCurrentRouteSettings
} from './navigation';
import {
  NavigationParams,
  NavigationActions,
  NavigationNavigateAction,
  NavigationContainerComponent,
  DrawerActions
} from 'react-navigation';
import { ROUTES } from '../const';

const initNavigator = (
  route: ROUTES
) => {
  const navigator = {
    state: {
      nav: {
        index: 0,
        routes: [{
          routeName: route
        }]
      }
    } as any
  } as NavigationContainerComponent;
  setTopLevelNavigator(navigator);
};

describe('navigate', () => {
  const route = 'route';
  const params = {
    a: 'a'
  } as NavigationParams;

  test('does not error if there is no navigator', () => {
    let error: Error;
    try {
      setTopLevelNavigator(null);
      navigate('route', {});
    } catch (e) {
      error = e;
    }
    expect(error!).toBeUndefined();
  });

  describe('when the navigator is set', () => {
    const navigationNavigateAction = {} as NavigationNavigateAction;
    const navigator = {} as NavigationContainerComponent;
    navigator.dispatch = jest.fn();
    let navigationActionsNavigate: jest.SpyInstance;

    beforeEach(() => {
      setTopLevelNavigator(navigator);
      navigationActionsNavigate = jest.spyOn(NavigationActions, 'navigate')
        .mockReturnValue(navigationNavigateAction);
      navigationActionsNavigate.mockClear();
      navigate(route, params);
    });

    test('creates a navigation action', () =>
      expect(navigationActionsNavigate).toHaveBeenCalledWith({
        params,
        routeName: route
      }));

    test('dispatches a navigator event', () =>
      expect(navigator.dispatch).toHaveBeenCalledWith(
        navigationNavigateAction
      ));

  });
});

describe('navigateBackOne', () => {
  let navigator: NavigationContainerComponent;

  beforeEach(() => {
    navigator = {} as NavigationContainerComponent;
    navigator.dispatch = jest.fn();
  });

  test('does nothing if there is no navigator', () => {
    setTopLevelNavigator(null);
    navigateBackOne();
    expect(navigator.dispatch).not.toHaveBeenCalled();
  });

  test('dispatches a back action', () => {
    setTopLevelNavigator(navigator);
    navigateBackOne();
    expect(navigator.dispatch)
      .toHaveBeenCalledWith(NavigationActions.back());
  });

});

describe('openDrawer', () => {
  let navigator: NavigationContainerComponent;

  beforeEach(() => {
    navigator = {} as NavigationContainerComponent;
    navigator.dispatch = jest.fn();
  });

  test('does nothing if there is no navigator', () => {
    setTopLevelNavigator(null);
    openDrawer();
    expect(navigator.dispatch).not.toHaveBeenCalled();
  });

  test('dispatches a open draw action', () => {
    setTopLevelNavigator(navigator);
    openDrawer();
    expect(navigator.dispatch)
      .toHaveBeenCalledWith(DrawerActions.openDrawer());
  });

});

describe('closeDrawer', () => {
  let navigator: NavigationContainerComponent;

  beforeEach(() => {
    navigator = {} as NavigationContainerComponent;
    navigator.dispatch = jest.fn();
  });

  test('does nothing if there is no navigator', () => {
    setTopLevelNavigator(null);
    closeDrawer();
    expect(navigator.dispatch).not.toHaveBeenCalled();
  });

  test('dispatches a close draw action', () => {
    setTopLevelNavigator(navigator);
    closeDrawer();
    expect(navigator.dispatch)
      .toHaveBeenCalledWith(DrawerActions.closeDrawer());
  });

});

describe('getCurrentNavigatorRoute', () => {
  const state = {
    nav: {
      index: 1,
      routes: [{
        routeName: 'r0'
      }, {
        routeName: 'r1'
      }]
    }
  };
  const navigator = {
    state: state as any
  } as NavigationContainerComponent;

  test('returns null if there is no navigator', () => {
    setTopLevelNavigator(null);
    expect(getCurrentNavigatorRoute()).toBeNull();
  });

  test('returns the matching route', () => {
    setTopLevelNavigator(navigator);
    expect(getCurrentNavigatorRoute()).toBe(state.nav.routes[1]);
  });

});

describe('getIsCurrentRouteAllSeasons', () => {
  test('returns false if the current route is not all seasons', () => {
    initNavigator(ROUTES.FOOD_DETAILS);
    expect(getIsCurrentRouteAllSeasons()).toBe(false);
  });

  test('returns true if the current route is all seasons', () => {
    initNavigator(ROUTES.ALL_SEASONS);
    expect(getIsCurrentRouteAllSeasons()).toBe(true);
  });
});

describe('getIsCurrentRouteSeasonDetails', () => {
  test('returns false if the current route is not season details', () => {
    initNavigator(ROUTES.FOOD_DETAILS);
    expect(getIsCurrentRouteSeasonDetails()).toBe(false);
  });

  test('returns true if the current route is season details', () => {
    initNavigator(ROUTES.SEASON_DETAILS);
    expect(getIsCurrentRouteSeasonDetails()).toBe(true);
  });
});

describe('getIsCurrentRouteAboutUs', () => {
  test('returns false if the current route is not about us', () => {
    initNavigator(ROUTES.FOOD_DETAILS);
    expect(getIsCurrentRouteAboutUs()).toBe(false);
  });

  test('returns true if the current route is about us', () => {
    initNavigator(ROUTES.ABOUT_US);
    expect(getIsCurrentRouteAboutUs()).toBe(true);
  });
});

describe('getIsCurrentRouteSettings', () => {
  test('returns false if the current route is not settings', () => {
    initNavigator(ROUTES.FOOD_DETAILS);
    expect(getIsCurrentRouteSettings()).toBe(false);
  });

  test('returns true if the current route is settings', () => {
    initNavigator(ROUTES.SETTINGS);
    expect(getIsCurrentRouteSettings()).toBe(true);
  });
});
