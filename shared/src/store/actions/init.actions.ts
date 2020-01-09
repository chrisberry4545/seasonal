import { Action } from 'redux';

export const INIT_APP = 'INIT_APP';
export function initApp(): Action {
  return {
    type: INIT_APP
  };
}
