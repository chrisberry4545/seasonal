import { webUiReducer } from './web-ui.reducer';
import { Action } from 'redux';
import { IWebUiState } from './web-ui-state.interface';
import { IState } from '../state.interface';
import { selectCurrentTab } from './web-ui.selectors';
import { TABS } from '../../const';
import { goToFoodTab, goToRecipesTab } from './web-ui.actions';

const updateState = (
  action: Action,
  initialState: IWebUiState | undefined = undefined
) => {
  const newSliceState = webUiReducer(
    initialState, action
  );
  return {
    webUi: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets current tab to food', () =>
    expect(selectCurrentTab(newAppState)).toBe(TABS.FOOD));

});

describe('can set tab to food tab', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(
      goToFoodTab(),
      {
        currentTab: TABS.RECIPES
      }
    )
  );

  test('sets current tab to food', () =>
    expect(selectCurrentTab(newAppState)).toBe(TABS.FOOD));

});

describe('can set tab to recipes tab', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState(
      goToRecipesTab(),
      {
        currentTab: TABS.FOOD
      }
    )
  );

  test('sets current tab to recipes', () =>
    expect(selectCurrentTab(newAppState)).toBe(TABS.RECIPES));

});
