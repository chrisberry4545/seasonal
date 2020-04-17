import React from 'react';
import { SearchBar } from './SearchBar';
import { shallow, ShallowWrapper } from 'enzyme';
import { BareButton, Input } from '../../components-elements';

jest.mock('../../components-elements', () => ({
  BareButton: () => 'BareButton',
  CrossIcon: () => 'CrossIcon',
  Input: () => 'Input',
  MagnifyingGlassIcon: () => 'MagnifyingGlassIcon'
}));

describe('<SearchBar />', () => {
  let wrapper: ShallowWrapper;
  let mockOnHideSearchBar: jest.Mock;
  let mockOnSearchChanged: jest.Mock;
  let mockOnShowSearchBar: jest.Mock;

  beforeEach(() => {
    mockOnHideSearchBar = jest.fn();
    mockOnSearchChanged = jest.fn();
    mockOnShowSearchBar = jest.fn();
  });

  describe('when the search bar is visible', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SearchBar
          isSearchBarVisible={true}
          onHideSearchBar={mockOnHideSearchBar}
          onSearchChanged={mockOnSearchChanged}
          onShowSearchBar={mockOnShowSearchBar} />
      )
    );

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('responds to search bar changes', () => {
      const onChangeText = wrapper.find(Input).first().props().onChangeText;
      if (onChangeText) {
        onChangeText('text');
      }
      expect(mockOnSearchChanged).toHaveBeenCalledWith('text');
    });

    test('can click to hide the search bar', () => {
      const onChangeText = wrapper.find(Input).first().props().onChangeText;
      if (onChangeText) {
        onChangeText('text');
      }
      expect(mockOnSearchChanged).toHaveBeenCalledWith('text');
    });

  });

  describe('when the search bar is not visible', () => {
    beforeEach(() =>
      wrapper = shallow(
        <SearchBar
          isSearchBarVisible={false}
          onHideSearchBar={mockOnHideSearchBar}
          onSearchChanged={mockOnSearchChanged}
          onShowSearchBar={mockOnShowSearchBar} />
      )
    );

    test('can click icon to show show search bar', () => {
      const onClick = wrapper.find(BareButton).first().props().onClick;
      if (onClick) {
        onClick();
      }
      expect(mockOnShowSearchBar).toHaveBeenCalled();
    });

    test('does not show the search input', () =>
      expect(wrapper.find(Input).exists()).toBe(false));

  });
});
