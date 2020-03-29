import React, { FC } from 'react';

import './SearchBar.scss';

import { ISearchBarProps } from './SearchBar.interface';

import {
  BareButton,
  CrossIcon,
  MagnifyingGlassIcon,
  Input
} from '@chrisb-dev/seasonal-shared-frontend-components';

const getSearchBarClassName = (isSearchBarVisible: boolean) => (
  'c-search-bar' +
    (
      isSearchBarVisible
        ? ' c-search-bar--show-full'
        : ''
    )
);

const focusOnInputIfSearchVisible = (
  ref: HTMLDivElement | undefined,
  isSearchBarVisible: boolean
) => {
  if (ref && isSearchBarVisible) {
    const input = ref.querySelector('input');
    if (input) {
      input.focus();
    }
  }
};

export const SearchBar: FC<ISearchBarProps> = ({
  isSearchBarVisible,
  onHideSearchBar,
  onSearchChanged,
  onShowSearchBar
}) => (
  <div className={getSearchBarClassName(isSearchBarVisible)}
    ref={
      (ref: HTMLDivElement) => (
        focusOnInputIfSearchVisible(ref, isSearchBarVisible)
      )
    }>
    <Input e2eTag='search-bar'
      className='c-search-bar__input'
      onChange={(newSearchTerm) => onSearchChanged(newSearchTerm)}
      placeholder='Search' />
    {
      isSearchBarVisible
        ? <BareButton className='c-search-bar__search-button'
            onClick={onHideSearchBar}>
            <CrossIcon />
          </BareButton>
        : <BareButton className='c-search-bar__search-button'
            onClick={onShowSearchBar}>
            <MagnifyingGlassIcon />
          </BareButton>
    }
  </div>
);
