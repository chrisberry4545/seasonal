import {
  navigationRef,
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
import { ROUTES } from '../const';
import {
  NavigationContainerRef,
  CommonActions,
  DrawerActions
} from '@react-navigation/native';

const setTopLevelNavigator = (
  navigator: NavigationContainerRef | null
) => {
  (navigationRef.current as any) = navigator;
};

const initNavigator = (
  route: ROUTES
) => {
  const navigator = {
    canGoBack: () => true,
    getRootState: () => ({
      index: 0,
      routes: [{
        name: route
      }]
    } as any)
  } as NavigationContainerRef;
  setTopLevelNavigator(navigator);
};

describe('navigate', () => {
  const route = 'route';
  const params = {
    a: 'a'
  };

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
    const navigationNavigateAction = {} as CommonActions.Action;
    const navigator = {} as NavigationContainerRef;
    navigator.dispatch = jest.fn();
    let navigationActionsNavigate: jest.SpyInstance;

    beforeEach(() => {
      setTopLevelNavigator(navigator);
      navigationActionsNavigate = jest.spyOn(CommonActions, 'navigate')
        .mockReturnValue(navigationNavigateAction);
      navigationActionsNavigate.mockClear();
      navigate(route, params);
    });

    test('creates a navigation action', () =>
      expect(navigationActionsNavigate).toHaveBeenCalledWith({
        name: route,
        params
      }));

    test('dispatches a navigator event', () =>
      expect(navigator.dispatch).toHaveBeenCalledWith(
        navigationNavigateAction
      ));

  });
});

describe('navigateBackOne', () => {
  let navigator: NavigationContainerRef;

  beforeEach(() => {
    navigator = {} as NavigationContainerRef;
    navigator.dispatch = jest.fn();
    navigator.canGoBack = jest.fn().mockReturnValue(true);
  });

  test('does nothing if there is no navigator', () => {
    setTopLevelNavigator(null);
    navigateBackOne();
    expect(navigator.dispatch).not.toHaveBeenCalled();
  });

  test('does nothing if the navigator cannot go back', () => {
    navigator.canGoBack = jest.fn().mockReturnValue(false);
    setTopLevelNavigator(navigator);
    navigateBackOne();
    expect(navigator.dispatch).not.toHaveBeenCalled();
  });

  test('dispatches a back action', () => {
    setTopLevelNavigator(navigator);
    navigateBackOne();
    expect(navigator.dispatch)
      .toHaveBeenCalledWith(CommonActions.goBack());
  });

});

describe('openDrawer', () => {
  let navigator: NavigationContainerRef;

  beforeEach(() => {
    navigator = {} as NavigationContainerRef;
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
  let navigator: NavigationContainerRef;

  beforeEach(() => {
    navigator = {} as NavigationContainerRef;
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
  const state: any = {
    index: 1,
    routes: [{
      name: 'r0'
    }, {
      name: 'r1'
    }]
  };
  const navigator = {
    getRootState: () => state
  } as NavigationContainerRef;

  test('returns null if there is no navigator', () => {
    setTopLevelNavigator(null);
    expect(getCurrentNavigatorRoute()).toBeNull();
  });

  test('returns the matching route', () => {
    setTopLevelNavigator(navigator);
    expect(getCurrentNavigatorRoute()).toBe(state.routes[1]);
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
