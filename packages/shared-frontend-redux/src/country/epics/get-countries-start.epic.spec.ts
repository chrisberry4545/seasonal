import { of } from 'rxjs';
import { initApp } from '../../ui';
import { getCountriesStart } from '../country.actions';
import { getCountriesStart$ } from './get-countries-start.epic';

describe('getCountriesStart$', () => {
  test('returns getCountriesStart', async () => {
    const result = await getCountriesStart$(
      of(initApp()) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(getCountriesStart());
  });
});
