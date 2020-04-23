import {
  storeFeedbackSettings$,
  getStoredFeedbackSettings$,
  showStoreListing$,
  showFeedbackForm$,
  sendFeedbackImprovements$
} from './feedback.epics';
import * as helpers from '../../../helpers';
import * as selectors from '../feedback.selectors';
import { IFeedbackState } from '../feedback-state.interface';
import {
  showFeedbackPopup,
  sendFeedbackWantToRate,
  sendFeedbackDoNotWantToRate,
  closeFeedbackPopup,
  initFeedbackState,
  sendFeedbackImprovementsStart,
  sendFeedbackImprovementsSuccess
} from '../feedback.actions';
import { of } from 'rxjs';
import { initApp } from '@chrisb-dev/seasonal-shared-frontend-redux';
import { STORE_URL } from '../../../config';
import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { TestScheduler } from 'rxjs/testing';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
});

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

describe('showFeedbackForm$', () => {
  beforeEach(() => {
    jest.spyOn(selectors, 'selectHasBeenShownFeedbackQuestions')
      .mockReturnValue(false);
    jest.spyOn(selectors, 'selectHasGivenFeedback')
      .mockReturnValue(false);
    jest.spyOn(sharedFrontendRedux, 'selectSettingsTimesAppStarted')
      .mockReturnValue(3);
  });

  describe('if the user has already seen the questions', () => {
    test('does not return anything', () => {
      jest.spyOn(selectors, 'selectHasBeenShownFeedbackQuestions')
        .mockReturnValue(true);

      testScheduler.run(({ cold, expectObservable }) => {
        const input = cold('a', {
          a: initFeedbackState({} as IFeedbackState)
        });
        const expected = '';

        expectObservable(
          showFeedbackForm$(
            input as any,
            of(null) as any,
            {}
          )
        ).toBe(expected);
      });

    });
  });

  describe('if the user has already given feedback', () => {
    test('does not return anything', () => {
      jest.spyOn(selectors, 'selectHasGivenFeedback')
        .mockReturnValue(true);

      testScheduler.run(({ cold, expectObservable }) => {
        const input = cold('a', {
          a: initFeedbackState({} as IFeedbackState)
        });
        const expected = '';

        expectObservable(
          showFeedbackForm$(
            input as any,
            of(null) as any,
            {}
          )
        ).toBe(expected);
      });

    });
  });

  describe('if the user has started the app only 2 times', () => {
    test('does not return anything', () => {
      jest.spyOn(sharedFrontendRedux, 'selectSettingsTimesAppStarted')
        .mockReturnValue(2);

      testScheduler.run(({ cold, expectObservable }) => {
        const input = cold('a', {
          a: initFeedbackState({} as IFeedbackState)
        });
        const expected = '';

        expectObservable(
          showFeedbackForm$(
            input as any,
            of(null) as any,
            {}
          )
        ).toBe(expected);
      });

    });

  });

  describe('if the user is due to give feedback', () => {
    test('returns showFeedbackPopup', () => {

      testScheduler.run(({ cold, expectObservable }) => {
        const input = cold('a', {
          a: initFeedbackState({} as IFeedbackState)
        });
        const expected = '10000ms r';

        expectObservable(
          showFeedbackForm$(
            input as any,
            of(null) as any,
            {}
          )
        ).toBe(expected, {
          r: showFeedbackPopup()
        });
      });

    });
  });

});

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
