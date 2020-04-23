import { of } from 'rxjs';
import { STORE_URL } from '../../../config';
import * as helpers from '../../../helpers';
import { sendFeedbackWantToRate } from '../feedback.actions';
import { showStoreListing$ } from './show-store-listing.epic';

describe('showStoreListing$', () => {
  test('takes the user to the store link', async () => {
    const mockGoToLink = jest.spyOn(helpers, 'goToLinkUrl')
      .mockReturnValue();
    await showStoreListing$(
      of(sendFeedbackWantToRate()) as any,
      of(null) as any,
      {}
    ).toPromise();
    expect(mockGoToLink).toHaveBeenCalledWith(
      STORE_URL
    );
  });
});
