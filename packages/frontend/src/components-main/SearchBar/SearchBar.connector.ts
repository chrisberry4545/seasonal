import { connect } from 'react-redux';
import {
  SearchBar
} from './SearchBar';
import {
  searchBarChanged,
  selectIsSearchBarVisible,
  showSearchBar,
  hideSearchBar
} from '@chrisb-dev/seasonal-shared-frontend-redux';
import {
  ISearchBarDispatchProps,
  ISearchBarInputProps
} from './SearchBar.interface';
import { Dispatch } from 'redux';
import { IState } from '../../store';

const mapStateToProps = (state: IState): ISearchBarInputProps => ({
  isSearchBarVisible: selectIsSearchBarVisible(state)
});

const mapDispatchToProps = (
  dispatch: Dispatch
): ISearchBarDispatchProps => ({
  onHideSearchBar: () => dispatch(hideSearchBar()),
  onSearchChanged: (newSearchTerm: string) => (
    dispatch((searchBarChanged(newSearchTerm)))
  ),
  onShowSearchBar: () => dispatch(showSearchBar())
});

export const SearchBarConnecter = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
