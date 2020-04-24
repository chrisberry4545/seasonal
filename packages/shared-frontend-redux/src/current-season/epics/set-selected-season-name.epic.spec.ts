import {
  setSeasonSelectedSeasonName$
} from './set-selected-season-name.epic';
import * as allBasicSeasons from '../../all-basic-seasons';
import { IBaseSeason } from '@chrisb-dev/seasonal-shared-models';
import { selectSeason } from '../../ui';
import { of } from 'rxjs';
import { setSelectedSeasonName } from '../current-season-name.actions';

describe('setSeasonSelectedSeasonName$', () => {
  const basicSeasons = [{
    name: 'n1'
  }] as IBaseSeason[];

  beforeEach(() =>
    jest.spyOn(allBasicSeasons, 'selectAllBasicSeasons')
      .mockReturnValue(basicSeasons)
  );

  describe('when there is a selected season', () => {
    test('returns setSelectedSeasonName with the seasons name', async () => {
      const result = await setSeasonSelectedSeasonName$(
        of(selectSeason(0)) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setSelectedSeasonName('n1'));
    });
  });

  describe('when there is no selected season', () => {
    test('returns setSelectedSeasonName with an empty string', async () => {
      const result = await setSeasonSelectedSeasonName$(
        of(selectSeason(1)) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(setSelectedSeasonName(''));
    });
  });
});
