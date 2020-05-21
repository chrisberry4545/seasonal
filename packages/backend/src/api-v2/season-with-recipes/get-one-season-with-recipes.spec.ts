import { IHydratedSeason } from '@chrisb-dev/seasonal-shared-models';
import * as getSeasonsWithRecipes from './get-seasons-with-recipes';
import { getOneSeasonWithRecipes } from './get-one-season-with-recipes';

describe('getOneSeasonWithRecipes', () => {
  let result: IHydratedSeason | undefined;
  const seasons = [{}] as IHydratedSeason[];
  beforeEach(async () => {
    jest.spyOn(getSeasonsWithRecipes, 'getSeasonsWithRecipes')
      .mockResolvedValue(seasons);
    result = await getOneSeasonWithRecipes(1, 'regionId');
  });

  test('returns the season', () => expect(result).toBe(seasons[0]));

});
