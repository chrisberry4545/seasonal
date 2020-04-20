import React from 'react';
import { Multiselect } from './Multiselect';
import { shallow, ShallowWrapper } from 'enzyme';
import { ISelectOption } from './select-option.interface';
import { BareButton } from '../Buttons';

jest.mock('../Buttons', () => ({
  BareButton: () => 'BareButton'
}));

describe('<Multiselect />', () => {
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

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  describe('when no values are selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Multiselect onChange={mockOnChange}
          className='class'
          value={[]}
          options={options} />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('selects the first value when clicked', () => {
      const onClick = wrapper.find(BareButton).first().prop('onClick');
      if (onClick) {
        onClick();
      }
      expect(mockOnChange).toHaveBeenCalledWith(['v1']);
    });
  });

  describe('when the values are null', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Multiselect onChange={mockOnChange}
          className='class'
          value={null}
          options={options} />
      );
    });

    test('selects the first value when clicked', () => {
      const onClick = wrapper.find(BareButton).first().prop('onClick');
      if (onClick) {
        onClick();
      }
      expect(mockOnChange).toHaveBeenCalledWith(['v1']);
    });
  });

  describe('when an option is selected', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Multiselect onChange={mockOnChange}
          className='class'
          value={['v1']}
          options={options} />
      );
    });

    test('marks the option as selected', () =>
      expect(wrapper.find(BareButton).first().prop('className'))
        .toBe('c-multi-select-option c-multi-select-option--selected'));

    test('unselects the value if it is clicked', () => {
      const onClick = wrapper.find(BareButton).first().prop('onClick');
      if (onClick) {
        onClick();
      }
      expect(mockOnChange).toHaveBeenCalledWith([]);
    });
  });

});
