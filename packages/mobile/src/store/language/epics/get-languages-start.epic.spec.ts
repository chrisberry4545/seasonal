import { of } from 'rxjs';
import { getLanguagesStart$ } from './get-languages-start.epic';
import { goToSettingsPage } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { setLanguagesStart } from '../language.actions';

describe('getLanguagesStart$', () => {
  test('returns getLanguagesStart', async () => {
    const result = await getLanguagesStart$(
      of(goToSettingsPage()) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(setLanguagesStart());
  });
});
