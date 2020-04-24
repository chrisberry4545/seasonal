import {
  setAllSeasonsWithFoodStart
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { getAllSeasonsWithFoodStart$ } from './get-all-seasons-with-food-start.epic';
import { Action } from 'redux';
import { goToAllSeasonsGetData } from '../route.actions';

describe('getAllSeasonsWithFoodStart$', () => {
  let result: Action;

  beforeEach(async () =>
    result = await getAllSeasonsWithFoodStart$(
      of(goToAllSeasonsGetData()) as any,
      of(null) as any,
      {}
    ).toPromise()
  );

  test('returns setAllSeasonsWithFoodStart', () =>
    expect(result).toEqual(setAllSeasonsWithFoodStart()));
});
