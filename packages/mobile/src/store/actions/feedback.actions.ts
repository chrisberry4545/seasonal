import { Action } from 'redux';
import { IFeedbackState } from '../../interfaces';

export interface IInitFeedbackState extends Action {
  feedbackState: IFeedbackState | null;
}
export const INIT_FEEDBACK_STATE = 'INIT_FEEDBACK_STATE';
export function initFeedbackState(
  feedbackState: IFeedbackState | null
): IInitFeedbackState {
  return {
    feedbackState,
    type: INIT_FEEDBACK_STATE
  };
}

export const SHOW_FEEDBACK_POPUP = 'SHOW_FEEDBACK_POPUP';
export function showFeedbackPopup() {
  return {
    type: SHOW_FEEDBACK_POPUP
  };
}

export const CLOSE_FEEDBACK_POPUP = 'CLOSE_FEEDBACK_POPUP';
export function closeFeedbackPopup() {
  return {
    type: CLOSE_FEEDBACK_POPUP
  };
}

export const SEND_FEEDBACK_DO_NOT_LIKE_APP = 'SEND_FEEDBACK_DO_NOT_LIKE_APP';
export function sendFeedbackDoNotLikeApp() {
  return {
    type: SEND_FEEDBACK_DO_NOT_LIKE_APP
  };
}

export interface ISendFeedbackImprovements extends Action {
  improvements: string;
}
export const SEND_FEEDBACK_IMPROVEMENTS = 'SEND_FEEDBACK_IMPROVEMENTS';
export function sendFeedbackImprovements(
  improvements: string
): ISendFeedbackImprovements {
  return {
    improvements,
    type: SEND_FEEDBACK_IMPROVEMENTS
  };
}

export const SEND_FEEDBACK_LIKE_APP = 'SEND_FEEDBACK_LIKE_APP';
export function sendFeedbackLikeApp() {
  return {
    type: SEND_FEEDBACK_LIKE_APP
  };
}

export const SEND_FEEDBACK_DO_NOT_WANT_TO_RATE =
  'SEND_FEEDBACK_DO_NOT_WANT_TO_RATE';
export function sendFeedbackDoNotWantToRate() {
  return {
    type: SEND_FEEDBACK_DO_NOT_WANT_TO_RATE
  };
}

export const SEND_FEEDBACK_WANT_TO_RATE =
  'SEND_FEEDBACK_WANT_TO_RATE';
export function sendFeedbackWantToRate() {
  return {
    type: SEND_FEEDBACK_WANT_TO_RATE
  };
}
