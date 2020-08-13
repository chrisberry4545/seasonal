import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ISettingsState, initSettings, setLanguage
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { setLanguage$ } from './set-language.epic';
import { LANGUAGES } from '@chrisb-dev/seasonal-shared-models';
import * as initLocalization from '../../../helpers/init-localization';

describe.each([
  initSettings({} as ISettingsState),
  setLanguage(LANGUAGES.FR_FR)
])('setLanguage$', (action) => {
  let mockInitLocalization: jest.SpyInstance;

  beforeEach(async () => {
    jest.clearAllMocks();
    mockInitLocalization = jest.spyOn(initLocalization, 'initLocalization');
    jest.spyOn(sharedFrontendRedux, 'selectSettingsLanguage')
      .mockReturnValue(LANGUAGES.FR_FR);
    await setLanguage$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('sets the language', () =>
    expect(mockInitLocalization).toHaveBeenCalledWith(LANGUAGES.FR_FR));

});
