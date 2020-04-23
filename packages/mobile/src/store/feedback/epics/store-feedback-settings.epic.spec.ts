import { of } from 'rxjs';
import * as helpers from '../../../helpers';
import { IFeedbackState } from '../feedback-state.interface';
import {
  closeFeedbackPopup,
  sendFeedbackDoNotWantToRate,
  sendFeedbackWantToRate,
  showFeedbackPopup
} from '../feedback.actions';
import * as selectors from '../feedback.selectors';
import { storeFeedbackSettings$ } from './store-feedback-settings.epic';

describe.each([
  showFeedbackPopup(),
  sendFeedbackWantToRate(),
  sendFeedbackDoNotWantToRate(),
  closeFeedbackPopup()
])('storeFeedbackSettings$', (action) => {
  let mockSetStoredData: jest.SpyInstance;
  const feedbackState = {
    hasGivenFeedback: false
  } as IFeedbackState;

  beforeEach(async () => {
    mockSetStoredData = jest.spyOn(
      helpers, 'setStoredData'
    );
    jest.spyOn(selectors, 'selectFeedbackState')
      .mockReturnValue(feedbackState);
    await storeFeedbackSettings$(
      of(action) as any,
      of(null) as any,
      {}
    ).toPromise();
  });

  test('stores the feedback data', () =>
    expect(mockSetStoredData).toHaveBeenCalledWith(
      'feedbackStorage', feedbackState
    ));

});
