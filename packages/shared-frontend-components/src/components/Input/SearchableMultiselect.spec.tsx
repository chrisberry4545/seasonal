import React from 'react';
import { SearchableMultiselect } from './SearchableMultiselect';
import { shallow, ShallowWrapper } from 'enzyme';
import { ISelectOption } from './select-option.interface';
import { Multiselect } from './Multiselect';
import { Input } from './Input';

jest.mock('./Multiselect', () => ({
  Multiselect: () => 'Multiselect'
}));
jest.mock('./Input', () => ({
  Input: () => 'Input'
}));

describe('<SearchableMultiselect />', () => {
  let wrapper: ShallowWrapper;
  let mockOnChange: jest.Mock;
  const options = [
    {
      label: 'l1',
      value: 'v1'
    },
    {
      label: 'l2',
      value: 'v2'
    }
  ] as ISelectOption[];
  const pressEnter = () => {
    const onKeyDown = wrapper.find(Input).prop('onKeyDown');
    if (onKeyDown) {
      onKeyDown({
        keyCode: 13
      } as any);
    }
  };

  beforeEach(() => {
    mockOnChange = jest.fn();
    wrapper = shallow(
      <SearchableMultiselect
        onChange={mockOnChange}
        className='class'
        options={options}
        value={['v1']} />
    );
  });

  test('renders correctly', () => expect(wrapper).toMatchSnapshot());

  test('outputs the value when changed', () => {
    wrapper.find(Multiselect).prop('onChange')(['new-val']);
    expect(mockOnChange).toHaveBeenCalledWith(['new-val']);
  });

  describe('when enter is pressed', () => {
    beforeEach(() => pressEnter());

    test('selects all visible options', () =>
      expect(mockOnChange).toHaveBeenCalledWith(['v1', 'v2']));
  });

  describe('when a search filter is applied', () => {
    beforeEach(() => wrapper.find(Input).prop('onChange')('l2'));

    test('filters the search results when a search is entered', () =>
      expect(wrapper.find(Multiselect).prop('options')).toHaveLength(1));

    test('shows the expected value', () =>
      expect(wrapper.find(Multiselect).prop('options')[0]).toBe(options[1]));
  });

  describe('if all options are selected and enter is pressed', () => {
    beforeEach(() => {
      wrapper = shallow(
        <SearchableMultiselect
          onChange={mockOnChange}
          className='class'
          options={options}
          value={['v1', 'v2']} />
      );
      pressEnter();
    });

    test('unselects every option', () =>
      expect(mockOnChange).toHaveBeenCalledWith([]));
  });
});
