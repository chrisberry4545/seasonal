import {
  setAllSeasonsWithRecipesStart, setDietType
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { getAllSeasonsWithRecipesStart$ } from './get-all-seasons-with-recipes-start.epic';
import { Action } from 'redux';
import { goToAllSeasonsGetData } from '../route.actions';
import * as getIsCurrentRouteAllSeasons from '../../../helpers';
import { DIET_TYPE } from '@chrisb-dev/seasonal-shared-models';

describe('getAllSeasonsWithRecipesStart$', () => {
  let result: Action | undefined;
  beforeEach(() => {
    result = undefined;
    jest.spyOn(getIsCurrentRouteAllSeasons, 'getIsCurrentRouteAllSeasons')
      .mockReturnValue(true);
  });

  describe('when going to the all seasons page', () => {
    beforeEach(async () =>
      result = await getAllSeasonsWithRecipesStart$(
        of(goToAllSeasonsGetData()) as any,
        of(null) as any,
        {}
      ).toPromise()
    );

    test('returns setAllSeasonsWithFoodStart', () =>
      expect(result).toEqual(setAllSeasonsWithRecipesStart()));
  });

  describe('when a dietary filter is changed but not on the all seasons page', () => {
    beforeEach(async () => {
      jest.spyOn(getIsCurrentRouteAllSeasons, 'getIsCurrentRouteAllSeasons')
        .mockReturnValue(false);
      result = await getAllSeasonsWithRecipesStart$(
        of(setDietType(DIET_TYPE.VEGAN)) as any,
        of(null) as any,
        {}
      ).toPromise();
    });

    test('returns setAllSeasonsWithFoodStart', () =>
      expect(result).toBeUndefined());
  });

  describe('when a dietary filter is changed and the user is on the all seasons page', () => {
    beforeEach(async () =>
      result = await getAllSeasonsWithRecipesStart$(
        of(setDietType(DIET_TYPE.VEGAN)) as any,
        of(null) as any,
        {}
      ).toPromise()
    );

    test('returns setAllSeasonsWithFoodStart', () =>
      expect(result).toEqual(setAllSeasonsWithRecipesStart()));
  });

});
