import * as sharedFrontendRedux from '@chrisb-dev/seasonal-shared-frontend-redux';
import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { IFeedbackState } from '../feedback-state.interface';
import { initFeedbackState, showFeedbackPopup } from '../feedback.actions';
import * as selectors from '../feedback.selectors';
import { showFeedbackForm$ } from './show-feedback-form.epic';

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected);
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
