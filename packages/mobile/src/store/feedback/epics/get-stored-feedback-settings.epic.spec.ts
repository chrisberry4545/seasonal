import { initApp } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { IFeedbackState } from '../feedback-state.interface';
import { initFeedbackState } from '../feedback.actions';
import { getStoredFeedbackSettings$ } from './get-stored-feedback-settings.epic';

describe('getStoredFeedbackSettings$', () => {
  test('returns initFeedbackState', async () => {
    const storedData = {
      hasGivenFeedback: true
    } as IFeedbackState;
    jest.spyOn(helpers, 'getStoredData')
      .mockResolvedValue(storedData);
    const result = await getStoredFeedbackSettings$(
      of(initApp()) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(result).toEqual(initFeedbackState(storedData));
  });
});
