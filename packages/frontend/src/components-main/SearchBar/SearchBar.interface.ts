export interface ISearchBarInputProps {
  isSearchBarVisible: boolean;
}

export interface ISearchBarDispatchProps {
  onSearchChanged: (newSearchTerm: string) => void;
  onShowSearchBar: () => void;
  onHideSearchBar: () => void;
}

export interface ISearchBarProps
  extends ISearchBarInputProps, ISearchBarDispatchProps {}
