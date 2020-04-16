import {
  goToRecipeLink$,
  goToFoodLink$,
  goToAboutUsPage$,
  goToSettingsPage$,
  goBack$,
  goToFoodTable$,
  goToAllSeasonsView$,
  closeMenu$,
  openMenu$
} from './route.epics';
import * as helpers from '../../helpers';
import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { IRecipe } from '@chrisb-dev/seasonal-shared-models';
import {
  foodDetailsSelectRecipe,
  recipeItemClicked,
  ISetCurrentFoodDetailsStart,
  foodItemClicked,
  setCurrentFoodDetailsStart,
  goToSettingsPage,
  setRegion,
  goBackFromSettingsPage,
  selectSeason,
  foodDetailsSelectSeason,
  goToAllSeasonsView,
  closeMenu,
  openMenu
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { ROUTES } from '../../const';
import { goToAboutUsPage, goBackFromFoodDetails } from './route.actions';

describe.each([
  foodDetailsSelectRecipe('r1'),
  recipeItemClicked('r1')
])('goToRecipeLink$', (action) => {
  let mockGoToLinkUrl: jest.SpyInstance;

  beforeEach(() =>  {
    mockGoToLinkUrl = jest
      .spyOn(helpers, 'goToLinkUrl')
      .mockReturnValue();
    mockGoToLinkUrl.mockClear();
  });

  describe('when a recipe exists', () => {
    const linkUrl = 'http://link.com';

    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectCurrentSeasonRecipesById')
        .mockReturnValue((() => ({
          linkUrl
        } as IRecipe)) as any);
      await goToRecipeLink$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('calls goToLinkUrl with the recipes url', () =>
      expect(mockGoToLinkUrl).toHaveBeenCalledWith(linkUrl));
  });

  describe('when a recipe does not exist', () => {
    beforeEach(async () => {
      jest.spyOn(sharedFrontendRedux, 'selectCurrentSeasonRecipesById')
        .mockReturnValue((() => undefined) as any);
      await goToRecipeLink$(
        of(action) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('does not call goToLinkUrl', () =>
      expect(mockGoToLinkUrl).not.toHaveBeenCalled());
  });
});

describe('goToFoodLink$', () => {
  let mockNavigate: jest.SpyInstance;
  let result: ISetCurrentFoodDetailsStart;
  const foodId = 'foodId';

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    result = await goToFoodLink$(
      of(foodItemClicked(foodId)) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the selected food item', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.FOOD_DETAILS, {
        id: foodId
      }
    ));

  test('returns setCurrentFoodDetailsStart', () =>
    expect(result).toEqual(setCurrentFoodDetailsStart(foodId)));
});

describe('goToAboutUsPage$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToAboutUsPage$(
      of(goToAboutUsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the about us page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.ABOUT_US
    ));
});

describe('goToSettingsPage$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToSettingsPage$(
      of(goToSettingsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the settings page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.SETTINGS
    ));
});

describe.each([
  setRegion('regionId'),
  goBackFromFoodDetails(),
  goBackFromSettingsPage()
])('goBack$', (action) => {
  let mockNavigateBackOne: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigateBackOne = jest.spyOn(helpers, 'navigateBackOne');
    mockNavigateBackOne.mockClear();
    await goBack$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates back one page', () =>
    expect(mockNavigateBackOne).toHaveBeenCalled());
});

describe.each([
  selectSeason(1),
  foodDetailsSelectSeason(1)
])('goToFoodTable$', (action) => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToFoodTable$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the season details page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.SEASON_DETAILS
    ));
});

describe('goToAllSeasonsView$', () => {
  let mockNavigate: jest.SpyInstance;

  beforeEach(async () => {
    mockNavigate = jest.spyOn(helpers, 'navigate');
    mockNavigate.mockClear();
    await goToAllSeasonsView$(
      of(goToAllSeasonsView()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('navigates to the all seasons page', () =>
    expect(mockNavigate).toHaveBeenCalledWith(
      ROUTES.ALL_SEASONS
    ));
});

describe.each([
  goToAboutUsPage(),
  selectSeason(1),
  closeMenu()
])('closeMenu$', (action) => {
  let mockCloseDrawer: jest.SpyInstance;

  beforeEach(async () => {
    mockCloseDrawer = jest.spyOn(helpers, 'closeDrawer');
    mockCloseDrawer.mockClear();
    await closeMenu$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('closes the nav drawer', () =>
    expect(mockCloseDrawer).toHaveBeenCalled());
});

describe('openMenu$', () => {
  let mockOpenDrawer: jest.SpyInstance;

  beforeEach(async () => {
    mockOpenDrawer = jest.spyOn(helpers, 'openDrawer');
    mockOpenDrawer.mockClear();
    await openMenu$(
      of(openMenu()) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('opens the nav drawer', () =>
    expect(mockOpenDrawer).toHaveBeenCalled());
});
