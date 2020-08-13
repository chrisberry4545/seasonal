import { IHydratedBadge } from '@chrisb-dev/seasonal-shared-models';
import { Action } from 'redux';

export interface ISetCurrentBadgeDetailsStart extends Action {
  badgeItemId?: string;
}
export const SET_CURRENT_BADGE_DETAILS_START =
  'SET_CURRENT_BADGE_DETAILS_START';
export function setCurrentBadgeDetailsStart(
  badgeItemId?: string
): ISetCurrentBadgeDetailsStart {
  return {
    badgeItemId,
    type: SET_CURRENT_BADGE_DETAILS_START
  };
}
export const SET_CURRENT_BADGE_DETAILS_ON_CHANGE =
  'SET_CURRENT_BADGE_DETAILS_ON_CHANGE';
export function setCurrentBadgeDetailsOnChange(
  badgeItemId?: string
): ISetCurrentBadgeDetailsStart {
  return {
    badgeItemId,
    type: SET_CURRENT_BADGE_DETAILS_ON_CHANGE
  };
}

export interface ISetCurrentBadgeDetailsSuccess extends Action {
  currentBadgeDetailsData: IHydratedBadge;
}
export const SET_CURRENT_BADGE_DETAILS_SUCCESS =
  'SET_CURRENT_BADGE_DETAILS_SUCCESS';
export function setCurrentBadgeDetailsSuccess(
  currentBadgeData: IHydratedBadge
): ISetCurrentBadgeDetailsSuccess {
  return {
    currentBadgeDetailsData: currentBadgeData,
    type: SET_CURRENT_BADGE_DETAILS_SUCCESS
  };
}
