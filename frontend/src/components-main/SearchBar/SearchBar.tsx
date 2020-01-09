import React, { FC } from 'react';

import './SearchBar.scss';

import { ISearchBarProps } from './SearchBar.interface';
import {
  Input
} from '../../components-elements';

import {
  BareButton,
  CrossIcon,
  MagnifyingGlassIcon
} from '../../components-elements';

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
    <Input className='c-search-bar__input'
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
