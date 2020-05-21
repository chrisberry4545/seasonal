import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as getSeasonsWithRecipes from './get-seasons-with-recipes';
import { getAllSeasonsWithRecipes } from './get-all-seasons-with-recipes';

describe('getAllSeasonsWithRecipes', () => {
  let result: IHydratedSeason[];
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getSeasonsWithRecipes, 'getSeasonsWithRecipes')
      .mockResolvedValue(seasons);
    result = await getAllSeasonsWithRecipes('regionId');
  });

  test('returns the seasons', () => expect(result).toBe(seasons));

});
