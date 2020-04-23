import { of } from 'rxjs';
import { sendFeedbackImprovementsStart, sendFeedbackImprovementsSuccess } from '../feedback.actions';
import * as selectors from '../feedback.selectors';
import { sendFeedbackImprovements$ } from './send-feedback-improvements.epic';

describe('sendFeedbackImprovements$', () => {

  describe('when there are not improvements', () => {
    beforeEach(() => {
      jest.spyOn(selectors, 'selectFeedbackImprovements')
        .mockReturnValue(undefined);
    });

    test('returns nothing', async () => {
      const result = await sendFeedbackImprovements$(
        of(sendFeedbackImprovementsStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toBeUndefined();
    });
  });

  describe('when there are improvements', () => {

    beforeEach(() => {
      jest.spyOn(selectors, 'selectFeedbackImprovements')
        .mockReturnValue('improvements');
    });

    test('returns sendFeedbackImprovementsSuccess', async () => {
      const result = await sendFeedbackImprovements$(
        of(sendFeedbackImprovementsStart()) as any,
        of(null) as any,
        {}
      ).toPromise();
      expect(result).toEqual(
        sendFeedbackImprovementsSuccess('improvements')
      );
    });
  });

});
