import {
  selectIsLocationSettingsPopupVisible,
  selectIsMenuOpen,
  selectIsRegionChangePromptVisible,
  selectIsSearchBarVisible,
  selectCurrentSearchTerm
} from './ui.selectors';
import {
  uiReducer
} from './ui.reducer';
import {
  goToAllSeasonsView,
  selectSeason,
  closeMenu,
  openMenu,
  searchBarChanged,
  showSearchBar,
  hideSearchBar,
  hideRegionChangePrompt,
  showLocationPopup,
  closeLocationPopup
} from './ui.actions';
import { IState } from '../state.interface';
import { Action } from 'redux';
import { IUiState } from './ui-state.interface';
import {
  setUserRegionDetected,
  setRegion
} from '../country';
import { setCurrentFoodDetailsStart } from '../current-food-details';

const updateState = (
  action: Action,
  initialState: IUiState | undefined = undefined
) => {
  const newSliceState = uiReducer(
    initialState, action
  );
  return {
    ui: newSliceState
  } as IState;
};

describe('default state', () => {
  let newAppState: IState;
  beforeEach(() =>
    newAppState = updateState({} as Action, undefined)
  );

  test('sets is location settings popup visible to false', () =>
    expect(selectIsLocationSettingsPopupVisible(newAppState)).toBe(false));

  test('sets is menu open to false', () =>
    expect(selectIsMenuOpen(newAppState)).toBe(false));

  test('sets is region change prompt visible to false', () =>
    expect(selectIsRegionChangePromptVisible(newAppState)).toBe(false));

  test('sets is search bar visibile to false', () =>
    expect(selectIsSearchBarVisible(newAppState)).toBe(false));
});

describe('close menu', () => {
  test.each([
    goToAllSeasonsView(),
    selectSeason(1),
    closeMenu()
  ])('closes the menu', (action) => {
    const newAppState = updateState(action);
    expect(selectIsMenuOpen(newAppState)).toBe(false);
  });
});

describe('open menu', () => {
  test('opens the menu', () => {
    const newAppState = updateState(
      openMenu()
    );
    expect(selectIsMenuOpen(newAppState)).toBe(true);
  });
});

describe('search bar changed', () => {
  test('updates the search term value', () => {
    const searchTerm = 'term';
    const newAppState = updateState(
      searchBarChanged(searchTerm)
    );
    expect(selectCurrentSearchTerm(newAppState))
      .toBe(searchTerm);
  });
});

describe('on search bar shown', () => {
  test('shows the search bar', () => {
    const newAppState = updateState(
      showSearchBar()
    );
    expect(selectIsSearchBarVisible(newAppState))
      .toBe(true);
  });
});

describe.each([
  hideSearchBar(),
  setCurrentFoodDetailsStart()
])('on search bar hidden', (action) => {
  let newAppState: IState;

  beforeEach(() => newAppState = updateState(action, {
    isSearchBarVisible: true,
    searchTerm: 'test'
  } as IUiState));

  test('hides the search bar', () =>
    expect(selectIsSearchBarVisible(newAppState))
      .toBe(false));

  test('sets search term to an empty string', () =>
    expect(selectCurrentSearchTerm(newAppState))
      .toBe(''));

});

describe('on user region detected', () => {
  test('shows the region change prompt', () => {
    const newAppState = updateState(
      setUserRegionDetected('regionId')
    );
    expect(selectIsRegionChangePromptVisible(newAppState))
      .toBe(true);
  });
});

describe('when the region change prompt is closed', () => {
  test('hides the region change prompt', () => {
    const newAppState = updateState(
      hideRegionChangePrompt()
    );
    expect(selectIsRegionChangePromptVisible(newAppState))
      .toBe(false);
  });
});

describe('when the location popup is shown', () => {
  test('shows the location popup', () => {
    const newAppState = updateState(
      showLocationPopup()
    );
    expect(selectIsLocationSettingsPopupVisible(newAppState))
      .toBe(true);
  });
});

describe('when the location popup is closed', () => {
  test.each([
    setRegion('regionId'),
    closeLocationPopup()
  ])('hides the location popup', (action) => {
    const newAppState = updateState(action);
    expect(selectIsLocationSettingsPopupVisible(newAppState))
      .toBe(false);
  });
});
