import { Action } from 'redux';
import {
  feedbackReducer
} from './feedback.reducer';
import {
  initFeedbackState,
  onMenuFeedbackSelected,
  showFeedbackPopup,
  feedbackImprovementsChanged,
  sendFeedbackImprovementsSuccess,
  sendFeedbackWantToRate,
  closeFeedbackPopup,
  sendFeedbackDoNotWantToRate,
  sendFeedbackDoNotLikeApp,
  sendFeedbackLikeApp
} from './feedback.actions';
import {
  selectIsFeedbackDoYouLikeTheAppQuestionVisible,
  selectHasBeenShownFeedbackQuestions,
  selectHasGivenFeedback,
  selectFeedbackImprovements,
  selectIsFeedbackPopupVisible,
  selectIsFeedbackImprovementsQuestionVisible,
  selectIsFeedbackRateOnStoreQuestionVisible
} from './feedback.selectors';
import { IFeedbackState } from './feedback-state.interface';
import { IState } from '../state.interface';

const updateState = (
  action: Action,
  initialState: IFeedbackState | undefined = undefined
) => {
  const newSliceState = feedbackReducer(
    initialState, action
  );
  return {
    feedback: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets current feedback view to do you like the app', () =>
    expect(selectIsFeedbackDoYouLikeTheAppQuestionVisible(newAppState))
      .toBe(true));

  test('sets has been shown feedback questions to false', () =>
    expect(selectHasBeenShownFeedbackQuestions(newAppState))
      .toBe(false));

  test('sets has given feedback to false', () =>
    expect(selectHasGivenFeedback(newAppState))
      .toBe(false));

  test('sets improvements to undefined', () =>
    expect(selectFeedbackImprovements(newAppState)).toBeUndefined());

  test('feedback popup is not visible', () =>
    expect(selectIsFeedbackPopupVisible(newAppState)).toBe(false));
});

describe('init feedback state', () => {
  test('sets the feedback state action', () => {
    const newAppState = updateState(
      initFeedbackState({
        hasGivenFeedback: true
      } as IFeedbackState)
    );
    expect(selectHasGivenFeedback(newAppState)).toBe(true);
  });
});

describe.each([
  onMenuFeedbackSelected(),
  showFeedbackPopup()
])('displaying feedback poup', (action) => {
  let newAppState: IState;

  beforeEach(() => {
    newAppState = updateState(
      action
    );
  });

  test('sets the current view', () =>
    expect(selectIsFeedbackDoYouLikeTheAppQuestionVisible(newAppState)).toBe(true));

  test('sets has been shown question', () =>
    expect(selectHasBeenShownFeedbackQuestions(newAppState)).toBe(true));

  test('popup set to visible', () =>
    expect(selectIsFeedbackPopupVisible(newAppState)).toBe(true));
});

describe('on improvement text changed', () => {
  test('updates improvements', () => {
    const newAppState = updateState(
      feedbackImprovementsChanged('new')
    );
    expect(selectFeedbackImprovements(newAppState)).toBe('new');
  });
});

describe.each([
  sendFeedbackWantToRate(),
  sendFeedbackImprovementsSuccess('test')
])('when completing the feedback form', (action) => {
  let newAppState: IState;
  beforeEach(() => {
    newAppState = updateState(
      action
    );
  });

  test('sets has given feedback', () =>
    expect(selectHasGivenFeedback(newAppState)).toBe(true));

  test('hides the popup', () =>
    expect(selectIsFeedbackPopupVisible(newAppState)).toBe(false));
});

describe.each([
  sendFeedbackDoNotWantToRate(),
  closeFeedbackPopup()
])('when exiting the feedback form', (action) => {
  let newAppState: IState;
  beforeEach(() => {
    newAppState = updateState(
      action
    );
  });

  test('hides the popup', () =>
    expect(selectIsFeedbackPopupVisible(newAppState)).toBe(false));
});

describe('when do not like the app is pressed', () => {
  test('sets current feedback view to improvements', () => {
    const newAppState = updateState(
      sendFeedbackDoNotLikeApp()
    );
    expect(selectIsFeedbackImprovementsQuestionVisible(newAppState))
      .toBe(true);
  });
});

describe('when like the app is pressed', () => {
  test('sets current feedback view to improvements', () => {
    const newAppState = updateState(
      sendFeedbackLikeApp()
    );
    expect(selectIsFeedbackRateOnStoreQuestionVisible(newAppState))
      .toBe(true);
  });
});
