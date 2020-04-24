import {
  setAllSeasonsWithRecipesStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { getAllSeasonsWithRecipesStart$ } from './get-all-seasons-with-recipes-start.epic';
import { Action } from 'redux';
import { goToAllSeasonsGetData } from '../route.actions';

describe('getAllSeasonsWithRecipesStart$', () => {
  let result: Action;

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
