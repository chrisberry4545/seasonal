import React from 'react';
import { Checkbox } from './Checkbox';
import { shallow, ShallowWrapper } from 'enzyme';

describe('<Checkbox />', () => {
  let wrapper: ShallowWrapper;
  let mockOnChange: jest.Mock;

  beforeEach(() => {
    mockOnChange = jest.fn();
  });

  describe('when the checkbox is checked', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Checkbox onChange={mockOnChange}
          className='class'
          value={true} />
      );
    });

    test('renders correctly', () => expect(wrapper).toMatchSnapshot());

    test('the checkbox is checked', () =>
      expect(wrapper.find('input').prop('checked')).toBe(true));

    test('outputs false when changed to not checked', () => {
      wrapper.find('input').simulate('change', { target: { checked: false } });
      expect(mockOnChange).toHaveBeenCalledWith(false);
    });
  });

  describe('when the checkbox is not checked', () => {
    beforeEach(() => {
      wrapper = shallow(
        <Checkbox onChange={mockOnChange}
          className='class'
          value={false} />
      );
    });

    test('the checkbox is not checked', () =>
      expect(wrapper.find('input').prop('checked')).toBe(false));

    test('outputs true when changed to checked', () => {
      wrapper.find('input').simulate('change', { target: { checked: true } });
      expect(mockOnChange).toHaveBeenCalledWith(true);
    });
  });
});
