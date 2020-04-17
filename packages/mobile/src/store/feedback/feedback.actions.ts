import { Action } from 'redux';
import { IFeedbackState } from './feedback-state.interface';

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

export const ON_MENU_FEEDBACK_SELECTED = 'ON_MENU_FEEDBACK_SELECTED';
export function onMenuFeedbackSelected() {
  return {
    type: 'ON_MENU_FEEDBACK_SELECTED'
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

export interface IFeedbackImprovementsChanged extends Action {
  improvements: string;
}
export const FEEDBACK_IMPROVEMENTS_CHANGED = 'FEEDBACK_IMPROVEMENTS_CHANGED';
export function feedbackImprovementsChanged(
  improvements: string
): IFeedbackImprovementsChanged {
  return {
    improvements,
    type: FEEDBACK_IMPROVEMENTS_CHANGED
  };
}

export const SEND_FEEDBACK_IMPROVEMENTS_START = 'SEND_FEEDBACK_IMPROVEMENTS_START';
export function sendFeedbackImprovementsStart(): Action {
  return {
    type: SEND_FEEDBACK_IMPROVEMENTS_START
  };
}

export interface ISendFeedbackImprovementsSuccess extends Action {
  improvements: string;
}
export const SEND_FEEDBACK_IMPROVEMENTS_SUCCESS = 'SEND_FEEDBACK_IMPROVEMENTS_SUCCESS';
export function sendFeedbackImprovementsSuccess(
  improvements: string
): ISendFeedbackImprovementsSuccess {
  return {
    improvements,
    type: SEND_FEEDBACK_IMPROVEMENTS_SUCCESS
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
